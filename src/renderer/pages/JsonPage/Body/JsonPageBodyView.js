import React from 'react';
import Table from '@material-ui/core/Table';

import useStyles from './JsonPageBodyStyles';
import { TableHead, TableCell, TableBody, TableRow } from '@material-ui/core';

const JsonPageBodyView = () => {
  const css = useStyles();

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell className={css.tableHeader}>File</TableCell>
          <TableCell className={css.tableHeader}>Second</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>File</TableCell>
          <TableCell>isEnabled</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>File</TableCell>
          <TableCell>isEnabled</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default JsonPageBodyView;
