import React from 'react';
import Table from '@material-ui/core/Table';

import useStyles from './JsonPageBodyStyles';
import { Switch, TableHead, TableCell, TableBody, TableRow, Tooltip } from '@material-ui/core';

const watchers = [
  {
    name: 'WebApp',
    file: 'c:\\git\\package.json',
    notify: true,
    tasks: 'npm i;npm start',
    enabled: false,
  },
  {
    name: 'Finder',
    file:
      'c:\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\package.json',
    notify: false,
    tasks: 'npm i;npm start',
    enabled: true,
  },
];

const JsonPageBodyView = () => {
  const css = useStyles();

  return (
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
          <TableCell className={css.tableHeaderCell}>Tasks</TableCell>
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
            <Tooltip title={watcher.tasks} classes={{ tooltip: css.tooltip }}>
              <TableCell className={css.tableCell}>{watcher.tasks}</TableCell>
            </Tooltip>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default JsonPageBodyView;
