import {
  ActionTypes,
  setWatcherEditorIsOpened,
  loadWatcherToEditor,
  openEditorToCreateNewWatcher,
  // TODO:
  setWatcherName,
  setWatcherFile,
  setWatcherIsNotify,
  setWatcherIsInstall,
  setWatcherIsScript,
  setWatcherTask,
} from './watcherEditor';

const defaultNewWatcher = {
  name: '',
  notify: false,
  enabled: true,
  install: true,
  script: true,
  file: '',
  task: 'npm run watch',
};

describe('Actions / watcher editor', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  it('should dispatch action setWatcherEditorOpened to open and close editor', () => {
    store.dispatch(setWatcherEditorIsOpened(true));
    const expectedActions = [
      {
        type: ActionTypes.WATCHEREDITOR_SET_WATCHER_EDITOR_OPENED,
        payload: true,
      },
    ];
    expect(store.getActions()).to.deep.equal(expectedActions);
  });

  it('should load watcher', () => {
    const testWatcher = {
      ...defaultNewWatcher,
      id: 42,
    };
    store.dispatch(loadWatcherToEditor(testWatcher));
    const expectedActions = [
      {
        type: ActionTypes.WATCHEREDITOR_LOAD_WATCHER,
        payload: testWatcher,
      },
    ];
    expect(store.getActions()).to.deep.equal(expectedActions);
  });

  it('should create new watcher', () => {
    store.dispatch(openEditorToCreateNewWatcher());
    const expectedActions = [
      {
        type: ActionTypes.WATCHEREDITOR_LOAD_WATCHER,
        payload: null,
      },
      {
        type: ActionTypes.WATCHEREDITOR_SET_WATCHER_EDITOR_OPENED,
        payload: true,
      },
    ];
    expect(store.getActions()).to.deep.equal(expectedActions);
  });

  describe('should change fields of wathcer: ', () => {
    it('name', () => {
      store.dispatch(setWatcherName('testing name'));
      const expectedActons = [
        {
          type: ActionTypes.WATCHEREDITOR_SET_NAME,
          payload: 'testing name',
        },
      ];
      expect(store.getActions()).to.deep.equal(expectedActons);
    });

    it('file', () => {
      store.dispatch(setWatcherFile('c:\\git\\package.json'));
      const expectedActions = [
        {
          type: ActionTypes.WATCHEREDITOR_SET_FILE,
          payload: 'c:\\git\\package.json',
        },
      ];
      expect(store.getActions()).to.deep.equal(expectedActions);
    });

    it('notify', () => {
      store.dispatch(setWatcherIsNotify(true));
      const expectedActions = [
        {
          type: ActionTypes.WATCHEREDITOR_SET_IS_NOTIFY,
          payload: true,
        },
      ];
      expect(store.getActions()).to.deep.equal(expectedActions);
    });

    it('install', () => {
      store.dispatch(setWatcherIsInstall(true));
      const expectedActions = [
        {
          type: ActionTypes.WATCHEREDITOR_SET_IS_INSTALL,
          payload: true,
        },
      ];
      expect(store.getActions()).to.deep.equal(expectedActions);
    });

    it('script', () => {
      store.dispatch(setWatcherIsScript(true));
      const expectedActions = [
        {
          type: ActionTypes.WATCHEREDITOR_SET_IS_SCRIPT,
          payload: true,
        },
      ];
      expect(store.getActions()).to.deep.equal(expectedActions);
    });

    it('task', () => {
      store.dispatch(setWatcherTask('npm run test'));
      const expectedActions = [
        {
          type: ActionTypes.WATCHEREDITOR_SET_TASK,
          payload: 'npm run test',
        },
      ];
      expect(store.getActions()).to.deep.equal(expectedActions);
    });
  });
});
