import { connect } from 'react-redux';
import { openEditorToCreateNewWatcher } from 'Actions/watcherEditor';
import JsonPageControlsView from './JsonPageControlsView';

const mapDispatchToProps = (dispatch) => ({
  handleCreateNewWatcher: () => dispatch(openEditorToCreateNewWatcher()),
});

export default connect(
  null,
  mapDispatchToProps,
)(JsonPageControlsView);
