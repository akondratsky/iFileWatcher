import React from 'react';
import Table from '@material-ui/core/Table';

import useStyles from './JsonPageBodyStyles';
import { Switch, TableHead, TableCell, TableBody, TableRow } from '@material-ui/core';

const watchers = [
  {
    name: 'WebApp',
    file: 'c:\\git\\package.json',
    notify: true,
    tasks: 'npm i;npm start',
    enabled: false,
    notify: true,
  },
  {
    name: 'Finder',
    file:
      'c:\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\git\\package.json',
    notify: false,
    tasks: 'npm i;npm start',
    enabled: true,
    notify: false,
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

            <TableCell className={css.tableCell}>{watcher.file}</TableCell>
            <TableCell className={css.tableSwicherCell} align="center">
              <Switch
                id={`switch_notify_${index}`}
                checked={watcher.notify}
                onChange={() => console.log('checked2')}
              />
            </TableCell>
            <TableCell className={css.tableCell}>{watcher.tasks}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default JsonPageBodyView;
