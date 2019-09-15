import { createAction } from 'redux-actions';

export const ActionTypes = {
  LOAD_OPTIONS: 'CONFIRM_DIALOG/LOAD_OPTIONS',
  SET_OPENED: 'CONFIRM_DIALOG/SET_OPENED',
};

export const confirmDialogLoadOptions = createAction(
  ActionTypes.LOAD_OPTIONS,
  (options) => options,
);

export const confirmDialogSetOpened = createAction(ActionTypes.SET_OPENED, (opened) => opened);

export const openConfirmDialog = (options) => (dispatch) => {
  dispatch(confirmDialogLoadOptions(options));
  dispatch(confirmDialogSetOpened(true));
};

export const closeConfirmDialog = () => (dispatch) => {
  dispatch(confirmDialogSetOpened(false));
};
