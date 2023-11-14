import {
  Box,
  DialogContent,
  DialogTitle,
  IconButton,
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
    <Box sx={{ minWidth: 500, zIndex: 1000000 }}>
      <Box className="flex justify-between">
        <DialogTitle>{title}</DialogTitle>
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <DialogContent className="!px-0">
        <Typography>{message}</Typography>
        <Box
          marginTop={2}
          width="100%"
          display="flex"
          flexDirection="row"
          justifyContent="flex-end">
          <Button
            variant="rounded-outlined"
            sx={{ height: 44, marginRight: '20px' }}
            onClick={handleClose}>
            {cancelTitle}
          </Button>
          <Button
            sx={{
              height: 44,
            }}
            onClick={handleConfirm}>
            {submitTitle}
          </Button>
        </Box>
      </DialogContent>
    </Box>
  );
};
