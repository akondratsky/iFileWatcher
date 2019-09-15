import { connect } from 'react-redux';
import {
  getConfirmDialogOptions,
  getIsConfirmDialogOpened,
} from 'Components/ConfirmDialog/selectors';
import { closeConfirmDialog } from 'Components/ConfirmDialog/actions';
import ConfirmDialogView from 'Components/ConfirmDialog/ConfirmDialogView';

const mapStateToProps = (state) => {
  const { title, text, buttons } = getConfirmDialogOptions(state);
  const opened = getIsConfirmDialogOpened(state);
  return { title, text, buttons, opened };
};

const mapDispatchToProps = (dispatch) => ({
  onClose: () => dispatch(closeConfirmDialog()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConfirmDialogView);
