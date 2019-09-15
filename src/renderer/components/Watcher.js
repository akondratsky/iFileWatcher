// import { getWatcherById } from 'Components/WatcherList/selectors';
// import { getState } from '../app';
import fs from 'fs';
import debounce from 'debounce';

export class Watcher {
  constructor(watcher) {
    this.id = watcher.id;
    this.filename = watcher.file;
    this.fsWatcher = fs.watch(this.filename, {}, debounce(this.changeHandler, 300));

    console.log(`watcher ${this.id} was created`);
    // const our_watcher = getWatcherById(getState(), { id: this.id });
  }

  changeHandler(eventType, filename) {
    console.log(eventType);
    console.log(`file changed: ${filename}`);
  }

  update(watcher) {
    console.log(`watcher ${this.id} was updated`);
  }

  stop() {
    this.fsWatcher.close();
    console.log(`watcher ${this.id} was stopped`);
  }
}
