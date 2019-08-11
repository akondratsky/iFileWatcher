import React, { useState, useEffect } from 'react';
import useStyles from './WatcherEditorStyles';
import * as Strings from 'Constants/strings';
import {
  Button,
  Dialog,
  DialogTitle,
  TextField,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from '@material-ui/core';
import TitledSwitcher from './TitledSwitcher';
import { getWatcherValidation, checkIsWatcherNameValid, checkIsFileValid } from './utils';
import { remote } from 'electron';
const { dialog } = remote;

const WatcherEditorView = ({ isOpened, handleClose, watcher: watcherToEdit, saveWatcher }) => {
  const [watcher, setWatcher] = useState(watcherToEdit);
  const [validation, setValidation] = useState({
    isValid: true,
    nameMsg: null,
    fileMsg: null,
  });

  useEffect(() => {
    setWatcher(watcherToEdit);
  }, [watcherToEdit]);

  const css = useStyles();

  const handleSaveClick = () => {
    const result = getWatcherValidation(watcher);
    setValidation(result);
    if (result.isValid) {
      saveWatcher({ ...watcher });
      handleClose();
    }
  };

  const handleNameChange = (e) => {
    const name = e.target.value;
    const error = checkIsWatcherNameValid(name);
    setValidation({ ...validation, nameMsg: error });
    setWatcher({ ...watcher, name });
  };

  const openFileDialog = () => {
    const openedFile = dialog.showOpenDialog({
      title: Strings.CHOOSE_FILE,
      properties: ['openFile'],
      filters: [{ name: '*.json', extensions: ['json'] }],
    });
    if (openedFile) {
      const error = checkIsFileValid(openedFile[0]);
      setWatcher({ ...watcher, file: openedFile[0] });
      setValidation({
        ...validation,
        fileMsg: error,
      });
    }
  };

  return (
    <Dialog open={isOpened} onClose={handleClose} PaperProps={{ className: css.withFixedWidth }}>
      <DialogTitle>Watcher editor</DialogTitle>
      <List>
        <ListItem>
          <TextField
            value={watcher.name}
            onChange={handleNameChange}
            fullWidth={true}
            label="Name"
            margin="dense"
            variant="outlined"
          />
          <TitledSwitcher
            title="Enabled"
            checked={watcher.enabled}
            onChange={(e) => setWatcher({ ...watcher, enabled: e.target.checked })}
          />
        </ListItem>
        <ListItem>
          <TextField
            fullWidth={true}
            margin="dense"
            variant="outlined"
            label="File to watch"
            value={watcher.file}
          />
        </ListItem>
        <ListItem>
          <Button variant="contained" onClick={openFileDialog}>
            Choose file
          </Button>
          <div>
            <TitledSwitcher
              title="Notify"
              checked={watcher.notify}
              onChange={(e) => setWatcher({ ...watcher, notify: e.target.checked })}
            />
            <TitledSwitcher
              title="Install"
              checked={watcher.install}
              onChange={(e) => setWatcher({ ...watcher, install: e.target.checked })}
            />
            <TitledSwitcher
              title="Script"
              checked={watcher.script}
              onChange={(e) => setWatcher({ ...watcher, script: e.target.checked })}
            />
          </div>
        </ListItem>
        <ListItem>
          <TextField
            fullWidth={true}
            label="Task"
            variant="outlined"
            value={watcher.task}
            onChange={(e) => setWatcher({ ...watcher, task: e.target.value })}
            margin="dense"
          />
        </ListItem>
        <ListItem className={css.buttonPane}>
          <List disablePadding>
            <Typography variant="body2" color="error">
              {validation.nameMsg}
            </Typography>
            <Typography variant="body2" color="error">
              {validation.fileMsg}
            </Typography>
          </List>
          <ListItemSecondaryAction>
            <Button color="primary" variant="contained" onClick={handleSaveClick}>
              Save
            </Button>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </Dialog>
  );
};

export default WatcherEditorView;
