import { createMuiTheme } from '@material-ui/core/styles';

const AppTheme = createMuiTheme({
  classes: {
    truncated: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
  },
});

export default AppTheme;
