import { ActionTypes, openConfirmDialog, closeConfirmDialog } from './ConfirmDialog';

describe('ConfirmDialog actions', () => {
  const options = {
    title: 'Confirm dialog title',
    text: 'some text here',
    buttons: [
      { title: 'ok', handler: () => {} },
      { title: 'cancel', handler: () => {} },
      { title: 'third', handler: () => {} },
    ],
  };

  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  it('should open confirm dialog', () => {
    store.dispatch(openConfirmDialog({ ...options }));
    const expectedActions = [
      {
        type: ActionTypes.LOAD_OPTIONS,
        payload: { ...options },
      },
      {
        type: ActionTypes.SET_OPENED,
        payload: true,
      },
    ];
    expect(store.getActions()).to.deep.equal(expectedActions);
  });

  it('should close confirm dialog', () => {
    store.dispatch(closeConfirmDialog());
    const expectedActions = [
      {
        type: ActionTypes.SET_OPENED,
        payload: false,
      },
    ];
    expect(store.getActions()).to.deep.equal(expectedActions);
  });
});
