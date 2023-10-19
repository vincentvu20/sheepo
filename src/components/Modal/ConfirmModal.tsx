import { Dialog } from '@headlessui/react';
import {
  ExclamationTriangleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { IConfirmModalProps } from '@/models/modal.model';
import { ModalServices } from '@/services/modal-service';
import { Button } from '..';

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
    <>
      <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
        <button
          type="button"
          className="rounded-md bg-white text-gray-400 hover:text-gray-500"
          onClick={handleClose}>
          <span className="sr-only">Close</span>
          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="sm:flex sm:items-start">
        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
          <ExclamationTriangleIcon
            className="h-6 w-6 !text-red-600"
            aria-hidden="true"
            color="red"
          />
        </div>
        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
          <Dialog.Title
            as="h3"
            className="text-base font-semibold leading-6 text-gray-900">
            {title}
          </Dialog.Title>
          <div className="mt-2">
            <p className="text-sm text-gray-500">{message}</p>
          </div>
        </div>
      </div>
      <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
        <Button onClick={handleConfirm}>{submitTitle}</Button>
        <Button
          onClick={handleClose}
          sx={{ borderWidth: '1px' }}
          className="!bg-white !text-black shadow-none !mr-3">
          {cancelTitle}
        </Button>
      </div>
    </>
  );
};
