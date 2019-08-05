import { connect } from 'react-redux';
import { getAllWatchers } from 'Selectors/watchers';
import JsonPageBodyView from './JsonPageBodyView';

const mapStateToProps = (state) => ({
  watchers: getAllWatchers(state),
});

export default connect(mapStateToProps)(JsonPageBodyView);
