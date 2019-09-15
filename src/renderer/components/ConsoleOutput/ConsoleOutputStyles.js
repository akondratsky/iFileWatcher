import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  consoleOutput: {
    marginTop: '1rem',
    padding: '1rem',
    overflow: 'auto',
    flexGrow: 1,

    lineHeight: '1rem',
    fontFamily: 'monospace',
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  message: {
    margin: 0,
    fontSize: '1rem',
  },
  error: {
    color: '#ff0000',
  },
}));

export default useStyles;
