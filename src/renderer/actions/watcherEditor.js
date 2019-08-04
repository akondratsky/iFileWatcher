import { createAction } from 'redux-actions';

export const ActionTypes = {
  WATCHEREDITOR_SET_WATCHER_EDITOR_OPENED: 'WATCHEREDITOR_SET_WATCHER_EDITOR_OPENED',
  WATCHEREDITOR_LOAD_WATCHER: 'WATCHEREDITOR_LOAD_WATCHER',
  WATCHEREDITOR_OPEN_TO_CREATE_NEW: 'WATCHEREDITOR_OPEN_TO_CREATE_NEW',
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
