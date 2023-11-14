import { Box, DialogActions, DialogTitle } from '@mui/material';
import { IFormModalProps } from '@/models/modal.model';
import { ModalServices } from '@/services/modal-service';
import { Button } from '..';

export const FormModal = ({
  onCancel,
  onConfirm,
  title = 'Are you sure?',
  submitTitle = 'Confirm',
  cancelTitle = 'Cancel',
  children,
  loading,
  sx,
}: IFormModalProps) => {
  const handleClose = () => {
    onCancel?.();
    ModalServices.hideModal?.();
  };

  const handleConfirm = () => {
    onConfirm?.();
    ModalServices.hideModal?.();
  };
  return (
    <Box sx={sx}>
      <DialogTitle>{title}</DialogTitle>
      {children}
      <DialogActions
        sx={{
          paddingRight: 4,
          paddingBottom: 2,
        }}>
        <Button
          variant="rounded-outlined"
          sx={{ height: 44 }}
          onClick={handleClose}>
          {cancelTitle}
        </Button>
        <Button
          sx={{
            height: 44,
          }}
          disabled={loading}
          onClick={handleConfirm}>
          {submitTitle}
        </Button>
      </DialogActions>
    </Box>
  );
};
