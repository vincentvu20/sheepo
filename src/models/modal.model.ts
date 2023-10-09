export interface IConfirmModalProps {
  message: string;
  title?: string;
  onConfirm: () => void;
  onCancel: () => void;
  submitTitle?: string;
  cancelTitle?: string;
}
