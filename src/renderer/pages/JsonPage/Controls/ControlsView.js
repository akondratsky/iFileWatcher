import React from 'react';
import { Button } from '@material-ui/core';

export const ControlsView = () => (
  <Button color="default" variant="contained" size="small" onClick={() => console.log('clicked')}>
    Add watcher
  </Button>
);
