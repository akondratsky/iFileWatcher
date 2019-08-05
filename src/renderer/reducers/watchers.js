import { handleActions } from 'redux-actions';
import { saveWatcher, deleteWatcher } from 'Actions/watchers';

const getStoreIndexById = (state, id) => state.findIndex((watcher) => watcher.id === id);

export default handleActions(
  {
    [saveWatcher]: (state, { payload: watcher }) => {
      const { id } = watcher;
      const storeIndex = getStoreIndexById(state, id);

      if (~storeIndex) {
        const [...newState] = state;
        newState.splice(storeIndex, 1, { ...watcher });
        return newState;
      }

      let newId;
      if (state.length) {
        newId = state[state.length - 1].id + 1;
      } else {
        newId = 1;
      }

      return [...state, { ...watcher, id: newId }];
    },

    [deleteWatcher]: (state, { payload: id }) => {
      const storeIndex = getStoreIndexById(state, id);
      const [...newState] = state;
      if (~storeIndex) newState.splice(storeIndex, 1);
      return newState;
    },
  },
  [],
);
