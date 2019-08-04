import { connect } from 'react-redux';
import WatcherEditorView from './WatcherEditorView';

let opened = false;

const mapStateToProps = () => ({
  isEditorOpened: opened,
  watcher: {
    name: 'New watcher',
  },
});

const mapDispatchToProps = () => ({
  handleClose: () => (opened = false),
  saveWatcher: (watcher) => console.log(watcher),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WatcherEditorView);
