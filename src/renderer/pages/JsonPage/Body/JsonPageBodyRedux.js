import { connect } from 'react-redux';

import { recycleWatchers } from 'Components/WatcherService/actions';

import { getAllWatchers } from 'Components/WatcherList/selectors';
import { openEditorToEditWatcher } from 'Components/WatcherEditor/actions';
import { openConfirmDialog } from 'Components/ConfirmDialog/actions';
import {
  deleteWatcher,
  setWatcherEnabledById,
  setWatcherNotifyById,
  setWatcherInstallById,
  setWatcherRunScriptById,
} from 'Components/WatcherList/actions';

import JsonPageBodyView from './JsonPageBodyView';

const mapStateToProps = (state) => ({
  watchers: getAllWatchers(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleWatcherEnabledChange: (id, enabled) => {
    dispatch(setWatcherEnabledById(id, enabled));
    dispatch(recycleWatchers());
  },
  handleWatcherNotifyChange: (id, notify) => dispatch(setWatcherNotifyById(id, notify)),
  handleWatcherInstallChange: (id, install) => dispatch(setWatcherInstallById(id, install)),
  handleWatcherRunScriptChange: (id, script) => {
    dispatch(setWatcherRunScriptById(id, script));
    dispatch(recycleWatchers());
  },
  handleEditWatcher: (watcher) => dispatch(openEditorToEditWatcher(watcher)),
  handleDeleteWatcher: (id) => {
    const options = {
      title: 'testing modal window',
      text: 'Text should be displayed',
      buttons: [
        {
          title: 'Ok',
          handler: () => {
            dispatch(deleteWatcher(id));
            dispatch(recycleWatchers());
          },
        },
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
