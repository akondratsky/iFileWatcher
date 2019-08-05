import { getAllWatchers } from './watchers';

describe('Watchers Selectors', () => {
  it('should get all watchers', () => {
    const state = {
      watchers: [{ id: 1, name: 'first watchers' }, { id: 2, name: 'second watcher' }],
    };
    const actual = getAllWatchers(state);
    const expected = state.watchers;

    expect(actual).to.deep.equal(expected);
  });
});
