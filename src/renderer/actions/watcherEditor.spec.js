import { ActionTypes, setWatcherEditorOpened } from './watcherEditor';

describe('Actions / watcher editor', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  it('should dispatch action setWatcherEditorOpened to open and close editor', () => {
    store.dispatch(setWatcherEditorOpened(true));
    const expectedActions = [
      {
        type: ActionTypes.WATCHEREDITOR_SET_WATCHER_EDITOR_OPENED,
        payload: true,
      },
    ];
    expect(store.getActions()).to.deep.equal(expectedActions);
  });
});
