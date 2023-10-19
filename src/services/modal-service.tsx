import toast from 'react-hot-toast';
import { ConfirmModal } from '@/components';
import { IConfirmModalProps } from '@/models/modal.model';
import { ModalPortalService } from '@/tools/modal-portal/services';

function hideModal() {
  ModalPortalService.dismiss();
}

function showConfirmModal(props: IConfirmModalProps) {
  ModalPortalService.show?.(<ConfirmModal {...props} />);
}

function showMessageSuccess({ message }: { message: string }) {
  toast(message, {
    position: 'top-right',
    type: 'success',
    style: { marginTop: 50 },
  } as any);
}

function showMessageError({ message }: { message: string }) {
  toast(message, {
    position: 'top-right',
    type: 'error',
    style: { marginTop: 50 },
  } as any);
}

export const ModalServices = {
  hideModal,
  showConfirmModal,
  showMessageError,
  showMessageSuccess,
};
