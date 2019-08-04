import { connect } from 'react-redux';
import JsonPageControlsView from './JsonPageControlsView';

const mapDispatchToProps = () => ({
  handleCreateNewWatcher: () => console.log('not implemented yet'),
});

export default connect(
  null,
  mapDispatchToProps,
)(JsonPageControlsView);
