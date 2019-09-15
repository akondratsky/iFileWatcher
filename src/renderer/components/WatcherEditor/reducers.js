import { handleActions } from 'redux-actions';
import { loadWatcherToEditor, setWatcherEditorIsOpened } from 'Components/WatcherEditor/actions';
import { defaultNewWatcher } from 'Constants/defaultValues';

export default handleActions(
  {
    [loadWatcherToEditor]: (state, { payload: watcher }) => {
      return {
        ...state,
        watcher: watcher ? { ...watcher } : { ...defaultNewWatcher },
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
    watcher: { ...defaultNewWatcher },
  },
);
