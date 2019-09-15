import { connect } from 'react-redux';
import { openEditorToCreateNewWatcher } from 'Components/WatcherEditor/actions';
import JsonPageControlsView from './JsonPageControlsView';

const mapDispatchToProps = (dispatch) => ({
  handleCreateNewWatcher: () => dispatch(openEditorToCreateNewWatcher()),
});

export default connect(
  null,
  mapDispatchToProps,
)(JsonPageControlsView);
