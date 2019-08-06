import {
  ActionTypes,
  deleteWatcher,
  saveWatcher,
  setWatcherEnabledById,
  setWatcherNotifyById,
  setWatcherRunScriptById,
  setWatcherInstallById,
} from './watchers';

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

  it('should change "Enabled" property of watcher by id', () => {
    store.dispatch(setWatcherEnabledById(42, true));
    const expectedActions = [
      {
        type: ActionTypes.JSON_SET_WATCHER_ENABLED_BY_ID,
        payload: { id: 42, enabled: true },
      },
    ];
    expect(store.getActions()).deep.equal(expectedActions);
  });

  it('should change "Notify" property of watcher by id', () => {
    store.dispatch(setWatcherNotifyById(42, true));
    const expectedActions = [
      {
        type: ActionTypes.JSON_SET_WATCHER_NOTIFY_BY_ID,
        payload: { id: 42, notify: true },
      },
    ];
    expect(store.getActions()).deep.equal(expectedActions);
  });

  it('should change "Script run" property of watcher by id', () => {
    store.dispatch(setWatcherRunScriptById(42, true));
    const expectedActions = [
      {
        type: ActionTypes.JSON_SET_WATCHER_SCRIPT_BY_ID,
        payload: { id: 42, script: true },
      },
    ];
    expect(store.getActions()).deep.equal(expectedActions);
  });

  it('should change "Script run" property of watcher by id', () => {
    store.dispatch(setWatcherInstallById(42, true));
    const expectedActions = [
      {
        type: ActionTypes.JSON_SET_WATCHER_INSTALL_BY_ID,
        payload: { id: 42, install: true },
      },
    ];
    expect(store.getActions()).deep.equal(expectedActions);
  });
});
