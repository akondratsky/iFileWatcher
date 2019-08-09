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
  Switch,
  Typography,
} from '@material-ui/core';
import { getWatcherValidation, checkIsWatcherNameValid, checkIsFileValid } from './utils';
import { remote } from 'electron';
const { dialog } = remote;

const WatcherEditorView = ({ isOpened, handleClose, watcher, saveWatcher }) => {
  const [name, setName] = useState(watcher.name);
  const [enabled, setEnabled] = useState(watcher.enabled);
  const [file, setFile] = useState(watcher.file);
  const [notify, setNotify] = useState(watcher.notify);
  const [script, setScript] = useState(watcher.script);
  const [install, setInstall] = useState(watcher.install);
  const [task, setTask] = useState(watcher.task);
  const [validation, setValidation] = useState({
    isValid: true,
    nameMsg: null,
    fileMsg: null,
  });

  useEffect(() => {
    setEnabled(watcher.enabled);
    setName(watcher.name);
    setFile(watcher.file);
    setNotify(watcher.notify);
    setScript(watcher.script);
    setInstall(watcher.install);
    setTask(watcher.task);
  }, [watcher]);

  const getWatcherFromEditor = () => ({
    id: watcher.id,
    enabled,
    name,
    file,
    notify,
    script,
    install,
    task,
  });

  const cs = useStyles();

  const handleSaveClick = () => {
    const watcherToSave = getWatcherFromEditor();
    const result = getWatcherValidation(watcherToSave);
    setValidation(result);
    if (result.isValid) {
      saveWatcher(watcherToSave);
      handleClose();
    }
  };

  const handleNameChange = (e) => {
    const name = e.target.value;
    const error = checkIsWatcherNameValid(name);
    setValidation({ ...validation, nameMsg: error });
    setName(name);
  };

  const openFileDialog = () => {
    const openedFile = dialog.showOpenDialog({
      title: Strings.CHOOSE_FILE,
      properties: ['openFile'],
      filters: [{ name: '*.json', extensions: ['json'] }],
    });
    if (openedFile) {
      const error = checkIsFileValid(openedFile[0]);
      setFile(openedFile[0]);
      setValidation({
        ...validation,
        fileMsg: error,
      });
    }
  };

  return (
    <Dialog open={isOpened} onClose={handleClose}>
      <DialogTitle>Watcher editor</DialogTitle>
      <List className={cs.fullwidth}>
        <ListItem>
          <TextField
            value={name}
            onChange={handleNameChange}
            fullWidth={true}
            label="Name"
            margin="dense"
            variant="outlined"
          />
          <span className={cs.separatedLeft}>Enabled</span>
          <Switch checked={enabled} onChange={(e) => setEnabled(e.target.checked)} />
        </ListItem>
        <ListItem>
          <TextField
            fullWidth={true}
            margin="dense"
            variant="outlined"
            label="File to watch"
            value={file}
          />
        </ListItem>
        <ListItem>
          <Button variant="contained" onClick={openFileDialog}>
            Choose file
          </Button>
          <ListItemText>
            <span className={cs.separatedLeft}>Notify</span>
            <Switch checked={notify} onChange={(e) => setNotify(e.target.checked)} />
            <span className={cs.separatedLeft}>Install</span>
            <Switch checked={install} onChange={(e) => setInstall(e.target.checked)} />
            <span className={cs.separatedLeft}>Script</span>
            <Switch checked={script} onChange={(e) => setScript(e.target.checked)} />
          </ListItemText>
        </ListItem>
        <ListItem>
          <TextField
            fullWidth={true}
            label="Task"
            variant="outlined"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            margin="dense"
          />
        </ListItem>
        <ListItem className={cs.buttonPane}>
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
