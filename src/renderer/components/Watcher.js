import fs from 'fs';
import debounce from 'debounce';
import notifier from 'node-notifier';
import path from 'path';
import kill from 'tree-kill';
import { spawn } from 'child_process';
import { dispatch, getState } from '../app';
import { getWatcherById } from 'Components/WatcherList/selectors';
import { writeMessage } from 'Components/MessageQueue/actions';
import { DEBOUNCE_JSON_WATCHER_TIME } from 'Constants/util';
import { JSON_WATCHER_APP_NAME } from 'Constants/strings';

const COMMAND_NPM = /^win/.test(process.platform) ? 'npm.cmd' : 'npm';

export class Watcher {
  constructor(watcher) {
    this.id = watcher.id;
    this.script = watcher.script;
    this.task = watcher.task;
    this.file = watcher.file;
    this.fsWatcher = fs.watch(this.file, {}, this.changeHandler);
    // do npm i
    // then run task
  }

  changeHandler = debounce(async () => {
    const { notify, install, script } = getWatcherById(getState(), { id: this.id });

    if (notify) {
      notifier.notify({
        title: 'iFileWatcher',
        message: `${this.file} was changed`,
      });
    }

    if (install) {
      if (this.install_process && !this.install_process.killed) {
        kill(this.install_process.pid);
        this.sendMessage('STOPPING CURRENT INSTALL PROCESS', false);
      }

      this.install_process = spawn(COMMAND_NPM, ['i'], {
        cwd: path.dirname(this.file),
      });

      this.install_process.stdout.on('data', (data) => this.sendMessage(data, false));
      this.install_process.stderr.on('data', (data) => this.sendMessage(data, true));
      this.install_process.on('close', (code) =>
        this.sendMessage(`WAS EXITED WITH CODE ${code}`, false),
      );
    }

    if (script) {
      console.warn('scripts not implemented yet');
    }
  }, DEBOUNCE_JSON_WATCHER_TIME);

  sendMessage(data, isError) {
    const { name } = getWatcherById(getState(), { id: this.id });
    dispatch(
      writeMessage({
        app: JSON_WATCHER_APP_NAME,
        timestamp: Date.now(),
        name,
        text: data.toString(),
        isError,
      }),
    );
  }

  stop() {
    this.fsWatcher.close();
    // TODO: stop script if runned
  }

  update(watcher) {
    if (this.file !== watcher.file) {
      this.fsWatcher.close();
      this.file = watcher.file;
      this.fsWatcher = fs.watch(this.file, {}, this.changeHandler);
      // also todo:
      // stop task if runned
      // rerun npm i then
      // rerun task
    }

    if (this.task !== watcher.task) {
      // TODO: rerun task if this.script
      console.log('task changed');
      this.task = watcher.task;
    }
  }
}
