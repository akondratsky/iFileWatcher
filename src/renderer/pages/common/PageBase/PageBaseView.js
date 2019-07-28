import React, { Fragment } from 'react';
import PageBaseStyles from './PageBaseStyles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { Toolbar } from '@material-ui/core';

const PageBase = (props) => {
  const cs = PageBaseStyles();
  const { title, controls, body } = props;

  return (
    <Fragment>
      <AppBar>
        <Toolbar>
          <Typography>headername</Typography>
        </Toolbar>
      </AppBar>
      <h1>{title}</h1>
      <div>{controls}</div>
      <main>{body}</main>
    </Fragment>
  );
};

export default PageBase;
