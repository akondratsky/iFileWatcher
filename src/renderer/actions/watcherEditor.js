import { createAction } from 'redux-actions';

export const ActionTypes = {
  WATCHEREDITOR_SET_WATCHER_EDITOR_OPENED: 'WATCHEREDITOR_SET_WATCHER_EDITOR_OPENED',
};

export const setWatcherEditorOpened = createAction(
  ActionTypes.WATCHEREDITOR_SET_WATCHER_EDITOR_OPENED,
  (isOpened) => isOpened,
);
