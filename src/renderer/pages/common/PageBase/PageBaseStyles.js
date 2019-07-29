import { makeStyles } from '@material-ui/styles';

const PageBaseStyles = makeStyles(() => ({
  container: {
    margin: '.5rem 1rem',
    flexGrow: 1,
  },
  pageTitle: {
    margin: 0,
  },
  controls: {
    padding: '.5rem 0 1rem',
  },
}));

export default PageBaseStyles;
