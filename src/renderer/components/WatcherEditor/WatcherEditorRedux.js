import { connect } from 'react-redux';

import { getIsWatcherEditorOpened, getEditedWatcher } from 'Components/WatcherEditor/selectors';
import { setWatcherEditorIsOpened } from 'Components/WatcherEditor/actions';
import { saveWatcher } from 'Components/WatcherList/actions';
import { recycleWatchers } from 'Components/WatcherService/actions';

import WatcherEditorView from './WatcherEditorView';

const mapStateToProps = (state) => ({
  isOpened: getIsWatcherEditorOpened(state),
  watcher: getEditedWatcher(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleClose: () => dispatch(setWatcherEditorIsOpened(false)),
  saveWatcher: (watcher) => {
    dispatch(saveWatcher(watcher));
    dispatch(recycleWatchers());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WatcherEditorView);
