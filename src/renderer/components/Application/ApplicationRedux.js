import { connect } from 'react-redux';
import { recycleWatchers } from 'Components/WatcherService/actions';
import ApplicationView from './ApplicationView';

const mapDispatchToProps = (dispatch) => ({
  initServices: () => {
    dispatch(recycleWatchers());
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(ApplicationView);
