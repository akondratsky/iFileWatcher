import reducer from './watchers';
import { ActionTypes } from 'Actions/watchers';

describe('Watchers reducers', () => {
  it('should handle creating new watcher', () => {
    const action = {
      type: ActionTypes.JSON_SAVE_WATCHER,
      payload: {
        id: 42,
        name: 'new reducer',
        notify: true,
      },
    };
    const test = [{ ...action.payload }];
    const actual = reducer([], action);
    expect(actual).to.deep.equal(test);
  });
});
