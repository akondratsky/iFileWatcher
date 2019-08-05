import { connect } from 'react-redux';
import WatcherEditorView from './WatcherEditorView';
import { getIsWatcherEditorOpened, getEditedWatcher } from 'Selectors/watcherEditor';
import { setWatcherEditorIsOpened } from 'Actions/watcherEditor';

const mapStateToProps = (state) => ({
  isEditorOpened: getIsWatcherEditorOpened(state),
  watcher: getEditedWatcher(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleClose: () => dispatch(setWatcherEditorIsOpened(false)),
  saveWatcher: () => console.log('saving not implemented'),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WatcherEditorView);
