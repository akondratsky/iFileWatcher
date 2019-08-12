import confirmDialogReducer from './ConfirmDialog';
import { ActionTypes } from 'Actions/ConfirmDialog';

describe('ConfirmDialog reducer', () => {
  it('should load dialog options', () => {
    const options = {
      title: 'Confirm dialog title',
      text: 'some text here',
      buttons: [
        { title: 'ok', handler: () => {} },
        { title: 'cancel', handler: () => {} },
        { title: 'third', handler: () => {} },
      ],
    };
    const action = {
      type: ActionTypes.LOAD_OPTIONS,
      payload: { ...options },
    };
    const actual = confirmDialogReducer({}, action);
    const expected = { options: { ...options } };

    expect(actual).to.deep.equal(expected);
  });

  it('should change "Opened" state', () => {
    const action = {
      type: ActionTypes.SET_OPENED,
      payload: true,
    };
    const actual = confirmDialogReducer({ opened: false }, action);
    const expected = { opened: true };

    expect(actual).to.be.deep.equal(expected);
  });
});
