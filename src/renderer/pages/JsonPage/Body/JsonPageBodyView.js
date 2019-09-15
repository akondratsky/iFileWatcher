import React from 'react';
import useStyles from './JsonPageBodyStyles';
import clsx from 'clsx';
import {
  Icon,
  Switch,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Tooltip,
} from '@material-ui/core';
import WatcherEditor from 'Components/WatcherEditor';

const JsonPageBodyView = ({
  watchers,
  handleWatcherEnabledChange,
  handleWatcherNotifyChange,
  handleWatcherInstallChange,
  handleWatcherRunScriptChange,
  handleEditWatcher,
  handleDeleteWatcher,
}) => {
  const css = useStyles();
  const switcherHeaderCellClass = clsx(css.tableHeaderCell, css.tableSwicherCell);

  return (
    <div className={css.container}>
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
                  checked={watcher.notify}
                  onChange={(e) => handleWatcherNotifyChange(watcher.id, e.target.checked)}
                />
              </TableCell>
              <TableCell className={css.tableSwicherCell} align="center">
                <Switch
                  checked={watcher.install}
                  onChange={(e) => handleWatcherInstallChange(watcher.id, e.target.checked)}
                />
              </TableCell>
              <Tooltip title={watcher.task} classes={{ tooltip: css.tooltip }}>
                <TableCell className={css.tableSwicherCell}>
                  <Switch
                    checked={watcher.script}
                    onChange={(e) => handleWatcherRunScriptChange(watcher.id, e.target.checked)}
                  />
                  {watcher.tasks}
                </TableCell>
              </Tooltip>
              <TableCell className={clsx(css.tableCell, css.actionPane)}>
                <Icon className={css.actionButton} onClick={() => handleEditWatcher(watcher)}>
                  edit
                </Icon>
                <Icon className={css.actionButton} onClick={() => handleDeleteWatcher(watcher.id)}>
                  delete
                </Icon>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default JsonPageBodyView;
