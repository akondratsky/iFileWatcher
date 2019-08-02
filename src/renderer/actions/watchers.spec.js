import { ActionTypes, saveWatcher, deleteWatcher } from './watchers';

const watcherStub = {
  id: 42,
  enabled: true,
  name: 'new watcher',
  file: 'c:\\git\\my\\package.json',
  task: 'npm run watch',
  notify: true,
  install: true,
  script: true,
};

describe('Watchers actions', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  it('should act watcher adding', () => {
    store.dispatch(saveWatcher({ ...watcherStub }));
    const expectedActions = [
      {
        type: ActionTypes.JSON_SAVE_WATCHER,
        payload: { ...watcherStub },
      },
    ];

    expect(store.getActions()).deep.equal(expectedActions);
  });

  it('should act watcher deleting', () => {
    store.dispatch(deleteWatcher(watcherStub.id));
    const expectedActions = [
      {
        type: ActionTypes.JSON_DELETE_WATCHER,
        payload: watcherStub.id,
      },
    ];

    expect(store.getActions()).deep.equal(expectedActions);
  });
});
