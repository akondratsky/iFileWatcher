import React from 'react';
import Grid from '@material-ui/core/Grid';
import useStyles from './JsonPageBodyStyles';

const JsonPageBodyView = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={0} className={classes.grid}>
      <Grid item xs={4}>
        Hello
      </Grid>
      <Grid item xs={4}>
        world
      </Grid>
    </Grid>
  );
};

export default JsonPageBodyView;
