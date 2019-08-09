import { getIsWatcherEditorOpened, getEditedWatcher } from './watcherEditor';

const state = {
  watcherEditor: {
    isOpened: true,
    watcher: {
      name: 'My Test Watcher',
    },
  },
};

describe('watcher editor selectors', () => {
  it('should get is editor opened', () => {
    expect(getIsWatcherEditorOpened(state)).to.equal(true);
  });

  it('should get a watcher', () => {
    expect(getEditedWatcher(state)).to.deep.equal({
      name: 'My Test Watcher',
    });
  });
});
