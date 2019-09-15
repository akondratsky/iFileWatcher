import { createAction } from 'redux-actions';
import { getAllWatchers } from 'Components/WatcherList/selectors';
import { Watcher } from 'Components/Watcher';

export const ActionTypes = {
  RECYCLE_WATCHERS: 'WatcherSerice/RECYCLE_WATCHERS',
};

const _runnedWatchers = [];

const _recycleWatchers = createAction(ActionTypes.RECYCLE_WATCHERS);

export const recycleWatchers = () => (dispatch, getState) => {
  const watchers = getAllWatchers(getState());

  console.log('recycling watchers');

  watchers.forEach((watcher) => {
    const index = _runnedWatchers.findIndex((runned) => runned.id === watcher.id);
    const watcherIsRunned = index !== -1;

    if (!watcherIsRunned && watcher.enabled) {
      const watcherToRun = new Watcher(watcher);
      _runnedWatchers.push(watcherToRun);
    }

    if (watcherIsRunned) {
      if (watcher.enabled) {
        _runnedWatchers[index].update(watcher);
      } else {
        _runnedWatchers[index].stop();
        _runnedWatchers.splice(index);
      }
    }
  });

  dispatch(_recycleWatchers());
};
