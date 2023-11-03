import {
  Box,
  DialogActions,
  DialogContent,
  // DialogTitle,
  Typography,
} from '@mui/material';
import { IConfirmModalProps } from '@/models/modal.model';
import { ModalServices } from '@/services/modal-service';
import { Button } from '..';
import { CloseIcon } from '../icons';

export const ConfirmModal = ({
  onCancel,
  onConfirm,
  message,
  title = 'Are you sure?',
  submitTitle = 'Confirm',
  cancelTitle = 'Cancel',
}: IConfirmModalProps) => {
  const handleClose = () => {
    onCancel?.();
    ModalServices.hideModal?.();
  };

  const handleConfirm = () => {
    onConfirm?.();
    ModalServices.hideModal?.();
  };
  return (
    <Box sx={{ minWidth: 600, paddingX: '40px', paddingY: '50px' }}>
      {/* <DialogTitle>{title}</DialogTitle> */}
      <div className="flex justify-between">
        <p>{title}</p>
        <button type="button" onClick={handleClose}>
          <CloseIcon />
        </button>
      </div>
      <DialogContent className="!px-0">
        <Typography>{message}</Typography>
      </DialogContent>
      <DialogActions className="!p-0">
        <Button
          variant="rounded-outlined"
          sx={{ height: 44 }}
          onClick={handleClose}>
          {cancelTitle}
        </Button>
        <Button
          sx={{
            height: 44,
            boxShadow: 'none',
          }}
          onClick={handleConfirm}>
          {submitTitle}
        </Button>
      </DialogActions>
    </Box>
  );
};
