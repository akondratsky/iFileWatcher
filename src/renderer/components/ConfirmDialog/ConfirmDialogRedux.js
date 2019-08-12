import { connect } from 'react-redux';
import { getConfirmDialogOptions, getIsConfirmDialogOpened } from 'Selectors/ConfirmDialog';
import { closeConfirmDialog } from 'Actions/ConfirmDialog';
import ConfirmDialogView from './ConfirmDialogView';

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
