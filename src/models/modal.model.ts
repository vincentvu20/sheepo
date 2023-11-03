import { ReactNode } from 'react';
import { SxProps } from '@mui/material';

export interface IConfirmModalProps {
  message: string;
  title?: string;
  onConfirm: () => void;
  onCancel: () => void;
  submitTitle?: string;
  cancelTitle?: string;
}

export interface IFormModalProps {
  message?: string;
  title?: string;
  onConfirm: () => void;
  onCancel: () => void;
  submitTitle?: string;
  cancelTitle?: string;
  children: ReactNode;
  loading?: boolean;
  sx?: SxProps;
}
