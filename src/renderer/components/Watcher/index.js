import { getWatcherById } from 'Components/WatcherList/selectors';
import { getState } from '../../app';

export class Watcher {
  constructor(watcher) {
    this.id = watcher.id;
    console.log(`watcher ${this.id} was created`);
    // const our_watcher = getWatcherById(getState(), { id: this.id });
  }

  update() {
    console.log(`watcher ${this.id} was updated`);
  }

  stop() {
    console.log(`watcher ${this.id} was stopped`);
  }
}
