import { ActionTypes, saveWatcher } from './watchers';

describe('Watchers', () => {
  it('should add watcher', () => {
    const store = mockStore({});
    const expectedActions = [
      {
        type: ActionTypes.JSON_SAVE_WATCHER,
        payload: {
          id: 42,
          name: 'watcher name',
          notify: true,
        },
      },
    ];

    store.dispatch(
      saveWatcher({
        id: 42,
        name: 'watcher name',
        notify: true,
      }),
    );

    expect(store.getActions()).deep.equal(expectedActions);
  });
});
