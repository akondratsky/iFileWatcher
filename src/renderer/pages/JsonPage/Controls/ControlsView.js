import React, { Fragment } from 'react';
import { Button, Modal, Paper } from '@material-ui/core';
import electron from 'electron';
const BrowserWindow = electron.remote.BrowserWindow;

const onClick = () => {
  const child = new BrowserWindow({
    parent: electron.remote.getCurrentWindow(),
    modal: true,
    show: false,
  });
  child.loadURL('./myfile.html');
  child.once('ready-to-show', () => {
    child.show();
  });
};

let isOpened = true;

export const ControlsView = () => (
  <Fragment>
    <Button
      color="default"
      variant="contained"
      size="small"
      onClick={() => {
        console.log(isOpened);
        isOpened = !isOpened;
      }}>
      Add watcher
    </Button>
    <Modal open={isOpened}>
      <Paper>I am modal window</Paper>
    </Modal>
  </Fragment>
);
