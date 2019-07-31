import React, { Fragment, useState } from 'react';
import { Button, Dialog, DialogTitle } from '@material-ui/core';
import useStyles from './JsonPageControlsStyles';

import { remote } from 'electron';
const { dialog } = remote;

const openDialog = () => {
  const file = dialog.showOpenDialog({
    title: 'Add new package.json file',
    properties: ['openFile'],
    filters: [{ name: '*.json', extensions: ['json'] }],
  });

  console.log(file);
};

export const ControlsView = () => {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const cs = useStyles();

  return (
    <Fragment>
      <Button color="default" variant="contained" size="small" onClick={handleOpen}>
        Add watcher
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add new package.json</DialogTitle>
        <div className={cs.container}>
          <button onClick={openDialog}>Choose file</button>
        </div>
      </Dialog>
    </Fragment>
  );
};
