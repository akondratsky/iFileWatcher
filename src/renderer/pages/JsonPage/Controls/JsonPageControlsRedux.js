import { connect } from 'react-redux';
import JsonPageControlsView from './JsonPageControlsView';
import { openEditorToCreateNewWatcher } from 'Actions/watcherEditor';

const mapDispatchToProps = (dispatch) => ({
  handleCreateNewWatcher: () => dispatch(openEditorToCreateNewWatcher()),
});

export default connect(
  null,
  mapDispatchToProps,
)(JsonPageControlsView);
