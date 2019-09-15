import { createAction } from 'redux-actions';

export const ActionTypes = {
  SAVE_WATCHER: 'JSON_WATCHERS/ADD_WATCHER',
  DELETE_WATCHER: 'JSON_WATCHERS/DELETE_WATCHER',
  SET_WATCHER_ENABLED_BY_ID: 'JSON_WATCHERS/SET_WATCHER_ENABLED_BY_ID',
  SET_WATCHER_NOTIFY_BY_ID: 'JSON_WATCHERS/SET_WATCHER_NOTIFY_BY_ID',
  SET_WATCHER_INSTALL_BY_ID: 'JSON_WATCHERS/SET_WATCHER_INSTALL_BY_ID',
  SET_WATCHER_SCRIPT_BY_ID: 'JSON_WATCHERS/SET_WATCHER_SCRIPT_BY_ID',
};

export const saveWatcher = createAction(ActionTypes.SAVE_WATCHER, (watcher) => watcher);

export const setWatcherEnabledById = createAction(
  ActionTypes.SET_WATCHER_ENABLED_BY_ID,
  (id, enabled) => ({ id, enabled }),
);

export const deleteWatcher = createAction(ActionTypes.DELETE_WATCHER, (id) => id);

export const setWatcherNotifyById = createAction(
  ActionTypes.SET_WATCHER_NOTIFY_BY_ID,
  (id, notify) => ({ id, notify }),
);

export const setWatcherRunScriptById = createAction(
  ActionTypes.SET_WATCHER_SCRIPT_BY_ID,
  (id, script) => ({ id, script }),
);

export const setWatcherInstallById = createAction(
  ActionTypes.SET_WATCHER_INSTALL_BY_ID,
  (id, install) => ({ id, install }),
);
