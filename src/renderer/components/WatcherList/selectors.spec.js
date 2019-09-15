import { getAllWatchers, getWatcherById } from './selectors';

const state = {
  watchers: [{ id: 1, name: 'first watchers' }, { id: 2, name: 'second watcher' }],
};

describe('WatcherList Selectors', () => {
  it('should get all watchers', () => {
    const actual = getAllWatchers(state);
    const expected = state.watchers;
    expect(actual).to.deep.equal(expected);
  });

  it('should get watcher by id', () => {
    const actual = getWatcherById(state, { id: 1 });
    const expected = state.watchers[0];
    expect(actual).to.deep.equal(expected);
  });
});
