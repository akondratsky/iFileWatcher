import { createAction } from 'redux-actions';

export const ActionTypes = {
  JSON_SAVE_WATCHER: 'JSON_ADD_WATCHER',
  JSON_DELETE_WATCHER: 'JSON_DELETE_WATCHER',
};

export const saveWatcher = createAction(ActionTypes.JSON_SAVE_WATCHER, (watcher) => watcher);

export const deleteWatcher = createAction(ActionTypes.JSON_DELETE_WATCHER, (id) => id);
