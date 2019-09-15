import React, { useCallback } from 'react';
import {
  DialogContent,
  Dialog,
  DialogTitle,
  Button,
  DialogContentText,
  DialogActions,
} from '@material-ui/core';

/**
 * Component that represents a confirmation dialog
 * @param {boolean} opened - is confirm dialog opened
 * @param {string} title - text in the header
 * @param {string} text - text in the body
 * @param {array} buttons - array of buttons
 * @param {handler_function} onClose - handler that will called on closing
 */
const ConfirmDialogView = ({ opened, title, text, buttons, onClose }) => {
  return (
    <Dialog open={opened} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{text}</DialogContentText>
      </DialogContent>
      <DialogActions>
        {buttons &&
          buttons.map((btn, index) => (
            <Button
              onClick={useCallback(() => {
                if (btn.handler) btn.handler();
                onClose();
              }, [btn.handler, onClose])}
              variant="outlined"
              key={index}>
              {btn.title}
            </Button>
          ))}
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialogView;
