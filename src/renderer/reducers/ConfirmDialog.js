import { handleActions } from 'redux-actions';
import { confirmDialogLoadOptions, confirmDialogSetOpened } from 'Actions/ConfirmDialog';

export default handleActions(
  {
    [confirmDialogLoadOptions]: (state, { payload: options }) => {
      return { ...state, options };
    },
    [confirmDialogSetOpened]: (state, { payload: opened }) => {
      return { ...state, opened };
    },
  },
  {
    options: {},
    opened: false,
  },
);
