import { connect } from 'react-redux';
import ConfirmDialogView from './ConfirmDialogView';
import { getConfirmDialogOptions, getIsConfirmDialogOpened } from 'Selectors/ConfirmDialog';
import { closeConfirmDialog } from 'Actions/ConfirmDialog';

const mapStateToProps = (state) => {
  const options = getConfirmDialogOptions(state);
  const opened = getIsConfirmDialogOpened(state);

  return {
    ...options,
    opened,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onClose: () => dispatch(closeConfirmDialog()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConfirmDialogView);
