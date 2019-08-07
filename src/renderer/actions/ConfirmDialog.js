import { createAction } from 'redux-actions';

export const ActionTypes = {
  CONFIRMDIALOG_LOAD_OPTIONS: 'CONFIRMDIALOG_LOAD_OPTIONS',
  CONFIRMDIALOG_SET_OPENED: 'CONFIRMDIALOG_SET_OPENED',
};

export const confirmDialogLoadOptions = createAction(
  ActionTypes.CONFIRMDIALOG_LOAD_OPTIONS,
  (options) => options,
);

export const confirmDialogSetOpened = createAction(
  ActionTypes.CONFIRMDIALOG_SET_OPENED,
  (opened) => opened,
);

export const openConfirmDialog = (options) => (dispatch) => {
  dispatch(confirmDialogLoadOptions(options));
  dispatch(confirmDialogSetOpened(true));
};

export const closeConfirmDialog = () => (dispatch) => {
  dispatch(confirmDialogSetOpened(false));
};
