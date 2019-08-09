import { handleActions } from 'redux-actions';
import {
  saveWatcher,
  deleteWatcher,
  setWatcherEnabledById,
  setWatcherNotifyById,
  setWatcherRunScriptById,
  setWatcherInstallById,
} from 'Actions/watchers';

const getStoreIndexById = (state, id) => state.findIndex((watcher) => watcher.id === id);

const safeStateWithReplacedField = (state, index, replacement) => {
  if (state[index]) {
    const [...newState] = state;
    newState.splice(index, 1, { ...state[index], ...replacement });
    return newState;
  }

  return state;
};

export default handleActions(
  {
    [saveWatcher]: (state, { payload: watcher }) => {
      const { id } = watcher;
      const storeIndex = getStoreIndexById(state, id);

      if (state[storeIndex]) {
        return safeStateWithReplacedField(state, storeIndex, { ...watcher });
      }

      const newId = !state.length ? 1 : state[state.length - 1].id + 1;
      return [...state, { ...watcher, id: newId }];
    },

    [deleteWatcher]: (state, { payload: id }) => {
      const index = getStoreIndexById(state, id);
      if (state[index]) {
        const [...newState] = state;
        newState.splice(index, 1);
        return newState;
      }
      return state;
    },

    [setWatcherEnabledById]: (state, { payload }) => {
      const { id, enabled } = payload;
      const index = getStoreIndexById(state, id);
      return safeStateWithReplacedField(state, index, { enabled });
    },

    [setWatcherNotifyById]: (state, { payload }) => {
      const { id, notify } = payload;
      const index = getStoreIndexById(state, id);
      return safeStateWithReplacedField(state, index, { notify });
    },

    [setWatcherRunScriptById]: (state, { payload }) => {
      const { id, script } = payload;
      const index = getStoreIndexById(state, id);
      return safeStateWithReplacedField(state, index, { script });
    },

    [setWatcherInstallById]: (state, { payload }) => {
      const { id, install } = payload;
      const index = getStoreIndexById(state, id);
      return safeStateWithReplacedField(state, index, { install });
    },
  },
  [],
);
