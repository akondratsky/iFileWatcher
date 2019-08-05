import React, { Fragment } from 'react';
import WatcherEditor from 'Components/WatcherEditor';
import useStyles from './JsonPageBodyStyles';
import clsx from 'clsx';
import {
  Table,
  Switch,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Tooltip,
} from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

const JsonPageBodyView = ({ watchers }) => {
  const css = useStyles();
  const tableSwitcherCellClass = clsx(css.tableHeaderCell, css.tableSwicherCell);

  return (
    <Fragment>
      <WatcherEditor />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center" className={tableSwitcherCellClass}>
              Enabled
            </TableCell>
            <TableCell className={css.tableHeaderCell}>Name</TableCell>
            <TableCell className={css.tableHeaderCell}>File</TableCell>
            <TableCell align="center" className={tableSwitcherCellClass}>
              Notify
            </TableCell>
            <TableCell align="center" className={tableSwitcherCellClass}>
              Install
            </TableCell>
            <TableCell className={css.tableHeaderCell}>Script</TableCell>
            <TableCell className={css.tableHeaderCell}>Actions</TableCell>
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
              <Tooltip title={watcher.task} classes={{ tooltip: css.tooltip }}>
                <TableCell className={css.tableCell}>
                  <Switch
                    id={`switch_script_enabled_${index}`}
                    checked={watcher.scriptEnabled}
                    onChange={() => console.log('checked2')}
                  />
                  {watcher.tasks}
                </TableCell>
              </Tooltip>
              <TableCell className={clsx(css.tableCell, css.actionPane)}>
                <Icon className={css.actionButton}>edit</Icon>
                <Icon className={css.actionButton}>delete</Icon>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Fragment>
  );
};

export default JsonPageBodyView;
