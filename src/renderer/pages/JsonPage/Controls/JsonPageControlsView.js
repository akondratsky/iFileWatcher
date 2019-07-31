import React, { Fragment, useState } from 'react';
import { Button, Dialog, DialogTitle, TextField, List, ListItem, ListItemText, Switch, ListItemSecondaryAction } from '@material-ui/core';
import useStyles from './JsonPageControlsStyles';
// import clsx from 'clsx';
import { remote } from 'electron';
const { dialog } = remote;

export const ControlsView = () => {
  const [open, setOpen] = useState(true);
  const [file, setFile] = useState(null);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const cs = useStyles();

  const openDialog = () => {
    const packageJson = dialog.showOpenDialog({
      title: 'Add new JSON',
      properties: ['openFile'],
      filters: [{ name: '*.json', extensions: ['json'] }],
    });
    if (packageJson) setFile(packageJson);
  };

  return (
    <Fragment>
      <Button color="default" variant="contained" size="small" onClick={handleOpen}>
        Add watcher
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add new package.json</DialogTitle>
        <List>
          <ListItem>
            <TextField id="outlined-dense" label="Name" margin="dense" variant="outlined" />
          </ListItem>
          <ListItem>
            <Button size="small" variant="contained" onClick={openDialog}>
              Choose file
            </Button>
            <ListItemText>{file}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Notify
              <Switch />
              Install
              <Switch />
              Script
              <Switch />
            </ListItemText>
          </ListItem>
          <ListItem>
            <TextField
              label="Task"
              variant="outlined"
              defaultValue="npm run watch"
              margin="dense"
            />
          </ListItem>
          <ListItem>
            <span>&nbsp;</span>
            <ListItemSecondaryAction>
              <Button color="primary" variant="contained">
                Save
              </Button>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Dialog>
    </Fragment>
  );
};
