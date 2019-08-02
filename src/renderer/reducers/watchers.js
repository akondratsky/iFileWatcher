import { handleActions } from 'redux-actions';
import { saveWatcher } from 'Actions/watchers';

export default handleActions(
  {
    [saveWatcher]: (state, action) => {
      const { id } = action.payload;
      const watcherIndex = state.findIndex((watcher) => watcher.id === id);

      if (~watcherIndex) {
        const [...newState] = state;
        newState.splice(watcherIndex, 1, { ...action.payload });
        return newState;
      }

      return [...state, { ...action.payload }];
    },
  },
  {},
);
