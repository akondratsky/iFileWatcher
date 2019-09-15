import watcherReducer from './watcherEditor';
import { ActionTypes } from 'Components/WatcherEditor/actions';

const watcherStub1 = {
  id: 42,
  enabled: true,
  name: 'new watcher',
  file: 'c:\\git\\my\\package.json',
  task: 'npm run watch',
  notify: true,
  install: true,
  script: true,
};

const watcherStub2 = {
  id: 13,
  enabled: true,
  name: 'new watcher 3',
  file: 'd:\\nofolder\\package.json',
  task: 'npm start',
  notify: false,
  install: true,
  script: false,
};

describe('Watcher Editor reducers', () => {
  it('should load watcher into state', () => {
    const loadAction = {
      type: ActionTypes.LOAD_WATCHER,
      payload: { ...watcherStub1 },
    };
    const actualState = watcherReducer({ watcher: { ...watcherStub2 } }, loadAction);
    const correctState = { watcher: { ...watcherStub1 } };

    expect(actualState).to.deep.equal(correctState);
  });

  it('should be opened', () => {
    const openAction = {
      type: ActionTypes.SET_OPENED,
      payload: true,
    };
    const actualState = watcherReducer(false, openAction);
    const correctState = { isOpened: true };
    expect(actualState).to.deep.equal(correctState);
  });
});
