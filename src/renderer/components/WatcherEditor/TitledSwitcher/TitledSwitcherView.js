import React, { Fragment } from 'react';
import useStyles from './TitledSwitcherStyles';
import { Switch } from '@material-ui/core';

const TitledSwitcherView = ({ title, checked, onChange }) => {
  const css = useStyles();
  return (
    <Fragment>
      <span className={css.separatedLeft}>{title}</span>
      <Switch checked={checked} onChange={onChange} />
    </Fragment>
  );
};

export default TitledSwitcherView;
