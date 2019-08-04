import { handleActions } from 'redux-actions';
import { loadWatcherToEditor, setWatcherEditorIsOpened } from 'Actions/watcherEditor';

const defaultNewWatcher = {
  name: '',
  notify: false,
  enabled: true,
  install: true,
  script: true,
  file: '',
  task: 'npm run watch',
};

export default handleActions(
  {
    [loadWatcherToEditor]: (state, { payload: watcher = { ...defaultNewWatcher } }) => {
      return { ...watcher };
    },
    [setWatcherEditorIsOpened]: (state, { payload: isOpened }) => {
      return isOpened;
    },
  },
  {},
);
