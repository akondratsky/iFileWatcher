import fs from 'fs';
import debounce from 'debounce';
import { getWatcherById } from 'Components/WatcherList/selectors';
import notifier from 'node-notifier';
import { getState } from '../app';

const DEBOUNCE_TIME = 1000;
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
      console.log('install');
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
