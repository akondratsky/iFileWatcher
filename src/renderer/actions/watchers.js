import { createAction } from 'redux-actions';

export const ActionTypes = {
  JSON_ADD_WATCHER: 'ADD_WATCHER',
};

export const addWatcher = createAction(ActionTypes.JSON_ADD_WATCHER, (watcher) => watcher);
