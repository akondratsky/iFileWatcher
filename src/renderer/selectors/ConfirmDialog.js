const getConfirmDialog = (state) => state.confirmDialog;

export const getConfirmDialogOptions = (state) => getConfirmDialog(state).options;

export const getIsConfirmDialogOpened = (state) => getConfirmDialog(state).opened;
