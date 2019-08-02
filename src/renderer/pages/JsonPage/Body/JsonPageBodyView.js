import React, { Fragment } from 'react';
import WatcherEditor from 'Components/WatcherEditor';
import useStyles from './JsonPageBodyStyles';
import {
  Table,
  Switch,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Tooltip,
} from '@material-ui/core';

const watchers = [
  {
    name: 'WebApp',
    file: 'c:\\git\\package.json',
    notify: true,
    tasks: 'npm i;npm start',
    enabled: false,
    autoinstall: true,
    scriptEnabled: true,
  },
  {
    name: 'Finder',
    file:
      'c:\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\package.json',
    notify: false,
    tasks: 'npm i;npm start',
    enabled: true,
    autoinstall: false,
    scriptEnabled: false,
  },
];

const JsonPageBodyView = () => {
  const css = useStyles();

  return (
    <Fragment>
      <WatcherEditor />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center" className={`${css.tableHeaderCell} ${css.tableSwicherCell}`}>
              Enabled
            </TableCell>
            <TableCell className={css.tableHeaderCell}>Name</TableCell>
            <TableCell className={css.tableHeaderCell}>File</TableCell>
            <TableCell align="center" className={`${css.tableHeaderCell} ${css.tableSwicherCell}`}>
              Notify
            </TableCell>
            <TableCell align="center" className={`${css.tableHeaderCell} ${css.tableSwicherCell}`}>
              Install
            </TableCell>
            <TableCell className={css.tableHeaderCell}>Script</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {watchers.map((watcher, index) => (
            <TableRow key={`table_row_${index}`}>
              <TableCell className={css.tableSwicherCell} align="center">
                <Switch
                  id={`switch_enabled_${index}`}
                  checked={watcher.enabled}
                  onChange={() => console.log('checked2')}
                />
              </TableCell>
              <TableCell>{watcher.name}</TableCell>
              <Tooltip title={watcher.file} classes={{ tooltip: css.tooltip }}>
                <TableCell className={css.tableCell}>{watcher.file}</TableCell>
              </Tooltip>
              <TableCell className={css.tableSwicherCell} align="center">
                <Switch
                  id={`switch_notify_${index}`}
                  checked={watcher.notify}
                  onChange={() => console.log('checked2')}
                />
              </TableCell>
              <TableCell className={css.tableSwicherCell} align="center">
                <Switch
                  id={`switch_auto_install_${index}`}
                  checked={watcher.notify}
                  onChange={() => console.log('checked2')}
                />
              </TableCell>
              <Tooltip title={watcher.tasks} classes={{ tooltip: css.tooltip }}>
                <TableCell className={css.tableCell}>
                  <Switch
                    id={`switch_script_enabled_${index}`}
                    checked={watcher.scriptEnabled}
                    onChange={() => console.log('checked2')}
                  />
                  {watcher.tasks}
                </TableCell>
              </Tooltip>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Fragment>
  );
};

export default JsonPageBodyView;
