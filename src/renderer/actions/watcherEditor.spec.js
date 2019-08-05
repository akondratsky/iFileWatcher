import {
  ActionTypes,
  setWatcherEditorIsOpened,
  loadWatcherToEditor,
  openEditorToCreateNewWatcher,
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
});
