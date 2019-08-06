import { connect } from 'react-redux';
import { getAllWatchers } from 'Selectors/watchers';
import JsonPageBodyView from './JsonPageBodyView';
import {
  setWatcherEnabledById,
  setWatcherNotifyById,
  setWatcherInstallById,
  setWatcherRunScriptById,
} from 'Actions/watchers';

const mapStateToProps = (state) => ({
  watchers: getAllWatchers(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleWatcherEnabledChange: (id, enabled) => dispatch(setWatcherEnabledById(id, enabled)),
  handleWatcherNotifyChange: (id, notify) => dispatch(setWatcherNotifyById(id, notify)),
  handleWatcherInstallChange: (id, install) => dispatch(setWatcherInstallById(id, install)),
  handleWatcherRunScriptChange: (id, script) => dispatch(setWatcherRunScriptById(id, script)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(JsonPageBodyView);
