import { makeStyles } from '@material-ui/core/styles';

const WatcherEditorStyles = makeStyles(() => ({
  container: {
    margin: '1rem',
  },
  fullWidth: {
    width: '100%',
    minWidth: '500px',
  },
  separatedLeft: {
    marginLeft: '2rem',
  },
  listItem: {
    display: 'flex',
  },
  growedElement: {
    flexGrow: 1,
  },
  buttonPane: {
    minHeight: '3.5rem',
  },
}));

export default WatcherEditorStyles;
