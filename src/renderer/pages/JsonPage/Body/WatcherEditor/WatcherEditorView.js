import React from 'react';
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
import { remote } from 'electron';
const { dialog } = remote;

const WatcherEditorView = ({ isEditorOpened, handleClose, watcher, saveWatcher }) => {
  const cs = useStyles();
  const handleSaveClick = () => saveWatcher(watcher);
  const openDialog = () => {
    const packageJson = dialog.showOpenDialog({
      title: 'Add new file to watch',
      properties: ['openFile'],
      filters: [{ name: '*.json', extensions: ['json'] }],
    });
    if (packageJson) watcher.file = packageJson;
  };

  return (
    <Dialog open={isEditorOpened} onClose={handleClose}>
      <DialogTitle>Add new package.json</DialogTitle>
      <List className={cs.fullwidth}>
        <ListItem>
          <TextField fullWidth={true} label="Name" margin="dense" variant="outlined" />
        </ListItem>
        <ListItem className={cs.listItem} style={{ minWidth: '500px' }}>
          <Button variant="contained" onClick={openDialog}>
            Choose file
          </Button>
          <ListItemText>
            <span className={cs.separatedLeft}>Notify</span>
            <Switch />
            <span className={cs.separatedLeft}>Install</span>
            <Switch />
            <span className={cs.separatedLeft}>Script</span>
            <Switch />
          </ListItemText>
        </ListItem>
        <ListItem>
          <TextField
            fullWidth={true}
            margin="dense"
            variant="outlined"
            label="File to watch"
            value={watcher.file || 'c:\\git\\my-app\\package.json'}
          />
        </ListItem>
        <ListItem>
          <TextField
            fullWidth={true}
            label="Task"
            variant="outlined"
            defaultValue="npm run watch"
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
