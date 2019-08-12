import { getIsConfirmDialogOpened, getConfirmDialogOptions } from './ConfirmDialog';

describe('ConfirmDialog selectors', () => {
  const state = {
    confirmDialog: {
      options: { title: 'hello' },
      opened: false,
    },
  };

  it('should return "Opened" status for confirm dialog', () => {
    const actual = getIsConfirmDialogOpened(state);
    expect(actual).to.be.equal(state.confirmDialog.opened);
  });

  it('should return options for confirm dialog', () => {
    const actual = getConfirmDialogOptions(state);
    expect(actual).to.be.deep.equal(state.confirmDialog.options);
  });
});
