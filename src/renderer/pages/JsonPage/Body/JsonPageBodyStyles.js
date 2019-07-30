import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  tableHeaderCell: {
    color: '#000000',
    backgroundColor: '#e0e0e0',
    fontSize: '1rem',
  },
  tableCell: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxWidth: '150px',
  },
  tableSwicherCell: {
    width: '80px',
    maxWidth: '80px',
  },
  tooltip: {
    maxWidth: '500px',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
}));

export default useStyles;
