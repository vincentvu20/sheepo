import toast from 'react-hot-toast';
import { ConfirmModal, FormModal } from '@/components';
import { IConfirmModalProps, IFormModalProps } from '@/models/modal.model';
import { clearContent, dismissModal, showModal } from '@/redux/slices';
import { store } from '@/redux/store';

function hideModal() {
  store.dispatch(dismissModal());
  setTimeout(() => {
    store.dispatch(clearContent());
  }, 0);
}

function showConfirmModal(props: IConfirmModalProps) {
  store.dispatch(showModal(<ConfirmModal {...props} />));
  // ModalPortalService.show?.(<ConfirmModal {...props} />);
}

function showFormModal(props: IFormModalProps) {
  store.dispatch(showModal(<FormModal {...props} />));
}

function showMessageSuccess({ message }: { message: string }) {
  if (!message) {
    return;
  }
  toast(message, {
    position: 'top-right',
    type: 'success',
    style: { marginTop: 50, fontSize: 16 },
  } as any);
}

function showMessageError({ message }: { message: string }) {
  if (!message) {
    return;
  }
  toast(message, {
    position: 'top-right',
    type: 'error',
    style: { marginTop: 50, fontSize: 16 },
  } as any);
}

export const ModalServices = {
  showFormModal,
  hideModal,
  showConfirmModal,
  showMessageError,
  showMessageSuccess,
};
