import fs from 'fs';
import debounce from 'debounce';
import notifier from 'node-notifier';
import path from 'path';
import kill from 'tree-kill';
import { spawn } from 'child_process';
import { getState } from '../app';
import { getWatcherById } from 'Components/WatcherList/selectors';

const DEBOUNCE_TIME = 1000;
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
      }

      this.install_process = spawn(COMMAND_NPM, ['i'], {
        cwd: path.dirname(this.file),
      });

      this.install_process.stdout.on('data', () => console.log(this.install_process.pid));
      // this.install_process.stderr.on('data', (data) => console.log(`stderr: ${data}`));
      this.install_process.on('close', (code) => console.log(`exited with code ${code}`));
    }

    if (script) {
      console.log('script!');
    }

    console.log(`file changed: ${this.file}`);
  }, DEBOUNCE_TIME);

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
