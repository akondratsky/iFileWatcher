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
    this.runInstall().then(() => this.runTask());
  }

  changeHandler = debounce(async () => {
    const { notify } = getWatcherById(getState(), { id: this.id });

    if (notify) {
      notifier.notify({
        title: 'iFileWatcher',
        message: `${this.file} was changed`,
      });
    }

    this.runInstall().then(() => this.runTask());
  }, DEBOUNCE_JSON_WATCHER_TIME);

  runInstall() {
    return new Promise((resolve) => {
      const { install } = getWatcherById(getState(), { id: this.id });

      if (!install) {
        resolve();
        return;
      }

      this.stopProcess(this.install_process);

      this.install_process = spawn(COMMAND_NPM, ['i'], {
        cwd: path.dirname(this.file),
      });

      this.waitFor(resolve, this.install_process);
    });
  }

  runTask() {
    return new Promise((resolve) => {
      const { script } = getWatcherById(getState(), { id: this.id });

      if (!script) {
        resolve();
        return;
      }

      this.stopProcess(this.taskProcess);

      let [command, ...args] = this.task.split(' ');
      if (command.toLowerCase() === 'npm') command = COMMAND_NPM;
      args = args.filter((arg) => Boolean(arg.trim())); // filter empty strings

      this.taskProcess = spawn(command, args, {
        cwd: path.dirname(this.file),
      });

      this.waitFor(resolve, this.taskProcess);
    });
  }

  waitFor(resolve, process) {
    process.stdout.on('data', (data) => this.sendMessage(data, false));
    process.stderr.on('data', (data) => this.sendMessage(data, true));

    process.on('close', (code) => {
      this.sendMessage(`TASK WAS EXITED WITH CODE ${code}`, false);
      resolve();
    });
  }

  sendMessage(data, isError) {
    const { name } = getWatcherById(getState(), { id: this.id });
    const regexp = new RegExp(String.fromCharCode(27), 'g');

    dispatch(
      writeMessage({
        app: JSON_WATCHER_APP_NAME,
        timestamp: Date.now(),
        name,
        text: data.toString().replace(regexp, ' '),
        isError,
      }),
    );
  }

  stop() {
    this.fsWatcher.close();
    this.stopProcess(this.install_process);
    this.stopProcess(this.taskProcess);
  }

  stopProcess(process) {
    if (process && !process.killed) {
      kill(process.pid);
      this.sendMessage('STOPPING PROCESS...', false);
    }
  }

  update(watcher) {
    if (this.file !== watcher.file) {
      this.fsWatcher.close();
      this.file = watcher.file;
      this.fsWatcher = fs.watch(this.file, {}, this.changeHandler);
      this.changeHandler();
    }

    if (this.task !== watcher.task) {
      this.task = watcher.task;
      this.changeHandler();
    }
  }
}
