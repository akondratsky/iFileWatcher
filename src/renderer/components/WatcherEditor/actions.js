import { createAction } from 'redux-actions';

export const ActionTypes = {
  SET_OPENED: 'WATCHER_EDITOR/SET_WATCHER_EDITOR_OPENED',
  LOAD_WATCHER: 'WATCHER_EDITOR/LOAD_WATCHER',
  OPEN_TO_CREATE_NEW: 'WATCHER_EDITOR/OPEN_TO_CREATE_NEW',
  SET_NAME: 'WATCHER_EDITOR/SET_NAME',
  SET_FILE: 'WATCHER_EDITOR/SET_FILE',
  SET_IS_NOTIFY: 'WATCHER_EDITOR/SET_IS_NOTIFY',
  SET_IS_INSTALL: 'WATCHER_EDITOR/SET_IS_INSTALL',
  SET_IS_SCRIPT: 'WATCHER_EDITOR/SET_IS_SCRIPT',
  SET_TASK: 'WATCHER_EDITOR/SET_TASK',
};

export const loadWatcherToEditor = createAction(ActionTypes.LOAD_WATCHER, (watcher) => watcher);

export const openEditorToCreateNewWatcher = () => (dispatch) => {
  dispatch(loadWatcherToEditor(null));
  dispatch(setWatcherEditorIsOpened(true));
};

export const setWatcherEditorIsOpened = createAction(
  ActionTypes.SET_OPENED,
  (isOpened) => isOpened,
);

export const openEditorToEditWatcher = (watcher) => (dispatch) => {
  dispatch(loadWatcherToEditor(watcher));
  dispatch(setWatcherEditorIsOpened(true));
};
