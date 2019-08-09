import { connect } from 'react-redux';
import { getIsWatcherEditorOpened, getEditedWatcher } from 'Selectors/watcherEditor';
import { setWatcherEditorIsOpened } from 'Actions/watcherEditor';
import { saveWatcher } from 'Actions/watchers';
import WatcherEditorView from './WatcherEditorView';

const mapStateToProps = (state) => ({
  isOpened: getIsWatcherEditorOpened(state),
  watcher: getEditedWatcher(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleClose: () => dispatch(setWatcherEditorIsOpened(false)),
  saveWatcher: (watcher) => dispatch(saveWatcher(watcher)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WatcherEditorView);
