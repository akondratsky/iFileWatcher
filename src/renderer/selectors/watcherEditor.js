import { defaultNewWatcher } from 'Constants/defaultValues';

const getWatcherEditor = (state) => state.watcherEditor;

export const getIsWatcherEditorOpened = (state) => getWatcherEditor(state).isOpened;

export const getEditedWatcher = (state) => getWatcherEditor(state).watcher || defaultNewWatcher;
