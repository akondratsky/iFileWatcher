import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';

import useStyles from './MainMenuStyles';
import Pages from '../../pages/common/Pages';

const MainMenu = (props) => {
  const classes = useStyles();

  const { goToPage } = props;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={true}
        classes={{
          paper: classes.drawerPaper,
        }}>
        <List>
          <ListItem button onClick={() => goToPage(Pages.Json)}>
            <ListItemText primary="JSON watchers" />
          </ListItem>
          <ListItem button onClick={() => goToPage(Pages.Console)}>
            <ListItemText primary="Console" />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      {props.children}
    </div>
  );
};

export default MainMenu;
