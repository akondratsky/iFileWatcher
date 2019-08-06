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

const JsonPageBodyView = ({
  watchers,
  handleWatcherEnabledChange,
  handleWatcherNotifyChange,
  handleWatcherInstallChange,
  handleWatcherRunScriptChange,
}) => {
  const css = useStyles();
  const switcherHeaderCellClass = clsx(css.tableHeaderCell, css.tableSwicherCell);

  return (
    <Fragment>
      <WatcherEditor />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center" className={switcherHeaderCellClass}>
              Enabled
            </TableCell>
            <TableCell className={css.tableHeaderCell}>Name</TableCell>
            <TableCell className={css.tableHeaderCell}>File</TableCell>
            <TableCell align="center" className={switcherHeaderCellClass}>
              Notify
            </TableCell>
            <TableCell align="center" className={switcherHeaderCellClass}>
              Install
            </TableCell>
            <TableCell className={switcherHeaderCellClass}>Script</TableCell>
            <TableCell className={css.tableHeaderCell}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {watchers.map((watcher) => (
            <TableRow key={`table_row_${watcher.id}`}>
              <TableCell className={css.tableSwicherCell} align="center">
                <Switch
                  id={`switch_enabled_${watcher.id}`}
                  checked={watcher.enabled}
                  onChange={(e) => handleWatcherEnabledChange(watcher.id, e.target.checked)}
                />
              </TableCell>
              <TableCell>{watcher.name}</TableCell>
              <Tooltip title={watcher.file} classes={{ tooltip: css.tooltip }}>
                <TableCell className={css.tableCell}>{watcher.file}</TableCell>
              </Tooltip>
              <TableCell className={css.tableSwicherCell} align="center">
                <Switch
                  id={`switch_notify_${watcher.id}`}
                  checked={watcher.notify}
                  onChange={(e) => handleWatcherNotifyChange(watcher.id, e.target.checked)}
                />
              </TableCell>
              <TableCell className={css.tableSwicherCell} align="center">
                <Switch
                  id={`switch_auto_install_${watcher.id}`}
                  checked={watcher.install}
                  onChange={(e) => handleWatcherInstallChange(watcher.id, e.target.checked)}
                />
              </TableCell>
              <Tooltip title={watcher.task} classes={{ tooltip: css.tooltip }}>
                <TableCell className={css.tableSwicherCell}>
                  <Switch
                    id={`switch_script_enabled_${watcher.id}`}
                    checked={watcher.script}
                    onChange={(e) => handleWatcherRunScriptChange(watcher.id, e.target.checked)}
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
