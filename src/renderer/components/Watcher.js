// import { getWatcherById } from 'Components/WatcherList/selectors';
// import { getState } from '../app';
import fs from 'fs';
import debounce from 'debounce';

export class Watcher {
  constructor(watcher) {
    this.id = watcher.id;
    this.watchForFile(watcher.file);
  }

  debouncedChangeHandler = debounce(this.changeHandler, 300);

  changeHandler = (eventType, filename) => {
    console.log(eventType);
    console.log(`file changed: ${filename}`);
  };

  stop() {
    this.fsWatcher.close();
    console.log(`watcher ${this.id} was stopped`);
  }

  update(watcher) {
    if (this.file !== watcher.file) {
      this.fsWatcher.close();
      this.watchForFile(watcher.file);
    }

    console.log(`watcher ${this.id} was updated`);
  }

  watchForFile(filename) {
    this.file = filename;
    this.fsWatcher = fs.watch(filename, {}, this.debouncedChangeHandler);
  }
}
