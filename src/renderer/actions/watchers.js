import { createAction } from 'redux-actions';

export const ActionTypes = {
  JSON_SAVE_WATCHER: 'JSON_ADD_WATCHER',
};

export const saveWatcher = createAction(ActionTypes.JSON_SAVE_WATCHER, (watcher) => watcher);
