import { createAction } from 'redux-actions';

export const ActionTypes = {
  JSON_SAVE_WATCHER: 'JSON_ADD_WATCHER',
  JSON_DELETE_WATCHER: 'JSON_DELETE_WATCHER',
  JSON_SET_WATCHER_ENABLED_BY_ID: 'JSON_SET_WATCHER_ENABLED_BY_ID',
  JSON_SET_WATCHER_NOTIFY_BY_ID: 'JSON_SET_WATCHER_NOTIFY_BY_ID',
  JSON_SET_WATCHER_INSTALL_BY_ID: 'JSON_SET_WATCHER_INSTALL_BY_ID',
  JSON_SET_WATCHER_SCRIPT_BY_ID: 'JSON_SET_WATCHER_SCRIPT_BY_ID',
};

export const saveWatcher = createAction(ActionTypes.JSON_SAVE_WATCHER, (watcher) => watcher);

export const deleteWatcher = createAction(ActionTypes.JSON_DELETE_WATCHER, (id) => id);

export const setWatcherEnabledById = createAction(
  ActionTypes.JSON_SET_WATCHER_ENABLED_BY_ID,
  (id, enabled) => ({ id, enabled }),
);

export const setWatcherNotifyById = createAction(
  ActionTypes.JSON_SET_WATCHER_NOTIFY_BY_ID,
  (id, notify) => ({ id, notify }),
);

export const setWatcherRunScriptById = createAction(
  ActionTypes.JSON_SET_WATCHER_SCRIPT_BY_ID,
  (id, script) => ({ id, script }),
);

export const setWatcherInstallById = createAction(
  ActionTypes.JSON_SET_WATCHER_INSTALL_BY_ID,
  (id, install) => ({ id, install }),
);
