import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  tableHeaderCell: {
    color: theme.palette.common.black,
    backgroundColor: theme.palette.grey[300],
    fontSize: theme.typography.body1.fontSize,
  },
  tableCell: {
    ...theme.classes.truncated,
    maxWidth: '150px',
  },
  tableSwicherCell: {
    width: '80px',
    maxWidth: '80px',
    textAlign: 'center',
  },
  tooltip: {
    ...theme.classes.truncated,
    maxWidth: '500px',
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
  container: {
    display: 'flex',
    flexFlow: 'column',
    width: '100%',
  },
}));

export default useStyles;
