import { handleActions } from 'redux-actions';
import { loadWatcherToEditor, setWatcherEditorIsOpened } from 'Actions/watcherEditor';
import { defaultNewWatcher } from 'Constants/defaultValues';

export default handleActions(
  {
    [loadWatcherToEditor]: (state, { payload: watcher }) => {
      const editedWatcher = watcher ? { ...watcher } : { ...defaultNewWatcher };
      return {
        ...state,
        watcher: editedWatcher,
      };
    },
    [setWatcherEditorIsOpened]: (state, { payload: isOpened }) => {
      return {
        ...state,
        isOpened,
      };
    },
  },
  {
    isOpened: false,
  },
);
