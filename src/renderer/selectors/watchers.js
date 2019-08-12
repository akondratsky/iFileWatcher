export const getAllWatchers = (state) => state.watchers;

export const getWatcherById = (state, { id }) => {
  return state.watchers.find((watcher) => watcher.id === id);
};
