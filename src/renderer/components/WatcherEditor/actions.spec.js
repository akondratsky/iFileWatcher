import sinon from 'sinon';
import {
  ActionTypes,
  setWatcherEditorIsOpened,
  loadWatcherToEditor,
  openEditorToCreateNewWatcher,
  openEditorToEditWatcher,
} from './watcherEditor';
import * as watcherSelectors from 'Components/WatcherList/selectors';

describe('Actions / watcher editor', () => {
  const watcherStub = {
    id: 42,
    name: 'I am watcher',
    notify: true,
    enabled: true,
    script: true,
    install: true,
    task: 'npm run task',
  };

  const defaultNewWatcher = {
    name: '',
    notify: false,
    enabled: true,
    install: true,
    script: true,
    file: '',
    task: 'npm run watch',
  };

  let store;
  let sandbox;

  before(() => {
    sandbox = sinon.sandbox.create();
    sandbox.stub(watcherSelectors, 'getWatcherById').callsFake(() => ({ ...watcherStub }));
  });

  after(() => sandbox.restore());

  beforeEach(() => {
    store = mockStore({});
  });

  it('should dispatch action setWatcherEditorIsOpened to open and close editor', () => {
    store.dispatch(setWatcherEditorIsOpened(true));
    const expectedActions = [
      {
        type: ActionTypes.SET_OPENED,
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
        type: ActionTypes.LOAD_WATCHER,
        payload: testWatcher,
      },
    ];
    expect(store.getActions()).to.deep.equal(expectedActions);
  });

  it('should create new watcher', () => {
    store.dispatch(openEditorToCreateNewWatcher());
    const expectedActions = [
      {
        type: ActionTypes.LOAD_WATCHER,
        payload: null,
      },
      {
        type: ActionTypes.SET_OPENED,
        payload: true,
      },
    ];
    expect(store.getActions()).to.deep.equal(expectedActions);
  });

  it('should open watcher by id', () => {
    store.dispatch(openEditorToEditWatcher({ ...watcherStub }));
    const expectedActions = [
      {
        type: ActionTypes.LOAD_WATCHER,
        payload: { ...watcherStub },
      },
      {
        type: ActionTypes.SET_OPENED,
        payload: true,
      },
    ];
    expect(store.getActions()).to.deep.equal(expectedActions);
  });
});
