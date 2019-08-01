import React from 'react';
import { Button } from '@material-ui/core';

const createNewWatcher = () => console.log('watcher creating not implemented yet');

export const ControlsView = () => (
  <Button color="default" variant="contained" size="small" onClick={createNewWatcher}>
    Add watcher
  </Button>
);
