import { createAction } from 'redux-actions';

export const ActionTypes = {
  WATCHEREDITOR_SET_WATCHER_EDITOR_OPENED: 'WATCHEREDITOR_SET_WATCHER_EDITOR_OPENED',
  WATCHEREDITOR_LOAD_WATCHER: 'WATCHEREDITOR_LOAD_WATCHER',
  WATCHEREDITOR_OPEN_TO_CREATE_NEW: 'WATCHEREDITOR_OPEN_TO_CREATE_NEW',
  WATCHEREDITOR_SET_NAME: 'WATCHEREDITOR_SET_NAME',
  WATCHEREDITOR_SET_FILE: 'WATCHEREDITOR_SET_FILE',
  WATCHEREDITOR_SET_IS_NOTIFY: 'WATCHEREDITOR_SET_IS_NOTIFY',
  WATCHEREDITOR_SET_IS_INSTALL: 'WATCHEREDITOR_SET_IS_INSTALL',
  WATCHEREDITOR_SET_IS_SCRIPT: 'WATCHEREDITOR_SET_IS_SCRIPT',
  WATCHEREDITOR_SET_TASK: 'WATCHEREDITOR_SET_TASK',
};

export const loadWatcherToEditor = createAction(
  ActionTypes.WATCHEREDITOR_LOAD_WATCHER,
  (watcher) => watcher,
);

export const openEditorToCreateNewWatcher = () => (dispatch) => {
  dispatch(loadWatcherToEditor(null));
  dispatch(setWatcherEditorIsOpened(true));
};

export const setWatcherEditorIsOpened = createAction(
  ActionTypes.WATCHEREDITOR_SET_WATCHER_EDITOR_OPENED,
  (isOpened) => isOpened,
);

export const setWatcherName = createAction(ActionTypes.WATCHEREDITOR_SET_NAME, (name) => name);

export const setWatcherFile = createAction(ActionTypes.WATCHEREDITOR_SET_FILE, (file) => file);

export const setWatcherIsInstall = createAction(
  ActionTypes.WATCHEREDITOR_SET_IS_INSTALL,
  (install) => install,
);

export const setWatcherIsNotify = createAction(
  ActionTypes.WATCHEREDITOR_SET_IS_NOTIFY,
  (notify) => notify,
);

export const setWatcherIsScript = createAction(
  ActionTypes.WATCHEREDITOR_SET_IS_SCRIPT,
  (isScript) => isScript,
);

export const setWatcherTask = createAction(ActionTypes.WATCHEREDITOR_SET_TASK, (task) => task);
