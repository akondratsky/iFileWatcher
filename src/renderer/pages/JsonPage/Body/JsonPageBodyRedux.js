import { connect } from 'react-redux';
import { getAllWatchers } from 'Selectors/watchers';
import { openEditorToEditWatcher } from 'Actions/watcherEditor';
import { openConfirmDialog } from 'Actions/ConfirmDialog';
import {
  deleteWatcher,
  setWatcherEnabledById,
  setWatcherNotifyById,
  setWatcherInstallById,
  setWatcherRunScriptById,
} from 'Actions/watchers';
import JsonPageBodyView from './JsonPageBodyView';

const mapStateToProps = (state) => ({
  watchers: getAllWatchers(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleWatcherEnabledChange: (id, enabled) => dispatch(setWatcherEnabledById(id, enabled)),
  handleWatcherNotifyChange: (id, notify) => dispatch(setWatcherNotifyById(id, notify)),
  handleWatcherInstallChange: (id, install) => dispatch(setWatcherInstallById(id, install)),
  handleWatcherRunScriptChange: (id, script) => dispatch(setWatcherRunScriptById(id, script)),
  handleEditWatcher: (watcher) => dispatch(openEditorToEditWatcher(watcher)),
  handleDeleteWatcher: (id) => {
    const options = {
      title: 'testing modal window',
      text: 'Text should be displayed',
      buttons: [
        { title: 'Ok', handler: () => dispatch(deleteWatcher(id)) },
        { title: 'Cancel', handler: null },
      ],
    };
    dispatch(openConfirmDialog(options));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(JsonPageBodyView);
