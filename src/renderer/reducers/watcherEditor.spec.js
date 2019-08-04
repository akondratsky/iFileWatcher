import watcherReducer from './watcherEditor';
import { ActionTypes } from 'Actions/watcherEditor';

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
      type: ActionTypes.WATCHEREDITOR_LOAD_WATCHER,
      payload: { ...watcherStub1 },
    };
    const actualState = watcherReducer({ ...watcherStub2 }, loadAction);
    const correctState = { ...watcherStub1 };

    expect(actualState).to.deep.equal(correctState);
  });

  it('should be opened', () => {
    const openAction = {
      type: ActionTypes.WATCHEREDITOR_SET_WATCHER_EDITOR_OPENED,
      payload: true,
    };
    const actualState = watcherReducer(false, openAction);
    const correctState = true;
    expect(actualState).to.equal(correctState);
  });
});
