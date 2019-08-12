import React, { useCallback } from 'react';
import {
  DialogContent,
  Dialog,
  DialogTitle,
  Button,
  DialogContentText,
  DialogActions,
} from '@material-ui/core';

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
