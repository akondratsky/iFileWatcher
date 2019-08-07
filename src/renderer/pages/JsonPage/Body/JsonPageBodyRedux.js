import { connect } from 'react-redux';
import { getAllWatchers } from 'Selectors/watchers';
import { openEditorToEditWatcher } from 'Actions/watcherEditor';
import JsonPageBodyView from './JsonPageBodyView';
import {
  setWatcherEnabledById,
  setWatcherNotifyById,
  setWatcherInstallById,
  setWatcherRunScriptById,
} from 'Actions/watchers';
import { openConfirmDialog } from 'Actions/ConfirmDialog';

const mapStateToProps = (state) => ({
  watchers: getAllWatchers(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleWatcherEnabledChange: (id, enabled) => dispatch(setWatcherEnabledById(id, enabled)),
  handleWatcherNotifyChange: (id, notify) => dispatch(setWatcherNotifyById(id, notify)),
  handleWatcherInstallChange: (id, install) => dispatch(setWatcherInstallById(id, install)),
  handleWatcherRunScriptChange: (id, script) => dispatch(setWatcherRunScriptById(id, script)),
  handleEditWatcher: (watcher) => dispatch(openEditorToEditWatcher(watcher)),
  handleDeleteWatcher: () => {
    const options = {
      title: 'testing modal window',
      text: 'Text should be displayed',
      buttons: [
        { title: 'Ok', handler: () => console.log('ok handled') },
        { title: 'Cancel', handler: () => console.log('cancel handled') },
      ],
    };
    dispatch(openConfirmDialog(options));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(JsonPageBodyView);
