import React from 'react';
import { Button } from '@material-ui/core';

const JsonPageControlsView = ({ handleCreateNewWatcher }) => (
  <Button color="default" variant="contained" size="small" onClick={handleCreateNewWatcher}>
    Add watcher
  </Button>
);

export default JsonPageControlsView;
