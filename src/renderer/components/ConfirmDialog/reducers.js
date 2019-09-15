import { handleActions } from 'redux-actions';
import { confirmDialogLoadOptions, confirmDialogSetOpened } from 'Components/ConfirmDialog/actions';

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
