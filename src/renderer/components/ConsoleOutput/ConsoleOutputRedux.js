import { connect } from 'react-redux';
import ConsoleOutputView from './ConsoleOutputView';
import { getMessages } from 'Components/MessageQueue/selectors';

const mapStateToProps = (state) => ({
  messages: getMessages(state),
});

export default connect(mapStateToProps)(ConsoleOutputView);
