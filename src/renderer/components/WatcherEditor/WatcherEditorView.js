import React, { useState, useEffect } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  TextField,
  List,
  ListItem,
  ListItemText,
  Switch,
  ListItemSecondaryAction,
} from '@material-ui/core';
import useStyles from './WatcherEditorStyles';
import { defaultNewWatcher } from 'Constants/defaultValues';
import { remote } from 'electron';
const { dialog } = remote;

const WatcherEditorView = ({
  isEditorOpened,
  handleClose,
  watcher = defaultNewWatcher,
  saveWatcher,
}) => {
  const [name, setName] = useState(watcher.name);
  const [enabled, setEnabled] = useState(watcher.enabled);
  const [file, setFile] = useState(watcher.file);
  const [notify, setNotify] = useState(watcher.notify);
  const [script, setScript] = useState(watcher.script);
  const [install, setInstall] = useState(watcher.install);
  const [task, setTask] = useState(watcher.task);

  useEffect(() => {
    setEnabled(watcher.enabled);
    setName(watcher.name);
    setFile(watcher.file);
    setNotify(watcher.notify);
    setScript(watcher.script);
    setInstall(watcher.install);
    setTask(watcher.task);
  }, [watcher]);

  const cs = useStyles();
  const handleSaveClick = () => {
    saveWatcher({
      id: watcher.id,
      enabled,
      name,
      file,
      notify,
      script,
      install,
      task,
    });
    handleClose();
  };
  const openDialog = () => {
    const openedFile = dialog.showOpenDialog({
      title: 'Add new file to watch',
      properties: ['openFile'],
      filters: [{ name: '*.json', extensions: ['json'] }],
    });

    if (openedFile) {
      setFile(openedFile);
    }
  };

  return (
    <Dialog open={isEditorOpened} onClose={handleClose}>
      <DialogTitle>Add new package.json</DialogTitle>
      <List className={cs.fullwidth}>
        <ListItem className={cs.listItem}>
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
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
        <ListItem className={cs.listItem} style={{ minWidth: '500px' }}>
          <Button variant="contained" onClick={openDialog}>
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
