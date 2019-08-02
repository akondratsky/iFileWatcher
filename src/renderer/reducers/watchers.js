import { handleActions } from 'redux-actions';
import { saveWatcher } from 'Actions/watchers';

export default handleActions(
  {
    [saveWatcher]: (state, action) => {
      return [...state, { ...action.payload }];
    },
  },
  {},
);
