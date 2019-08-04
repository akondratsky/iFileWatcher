import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
  actionPane: {
    '& $actionButton:not(:last-child)': {
      marginRight: '1rem',
    },
  },
  actionButton: {
    color: theme.palette.secondary.main,
    overflow: 'visible',
    '&:hover': {
      textShadow: `0 0 1rem ${theme.palette.secondary.main}`,
      color: theme.palette.common.white,
    },
  },
}));

export default useStyles;
