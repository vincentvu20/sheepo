import { ConfirmModal, Input } from '@/components';

interface DialogFormAttributesProps {
  open: boolean;
  onClose: () => void;
  type: 'create' | 'edit';
}

export const DialogFormAttributes = ({
  open,
  onClose,
  type,
}: DialogFormAttributesProps) => {
  return (
    <ConfirmModal
      open={open}
      toggle={onClose}
      title={type === 'create' ? 'Create Attribute' : 'Edit Attribute'}
      submitTitle={type === 'create' ? 'Create' : 'Edit'}
      cancelTitle="Cancel"
      onCancel={() => {}}
      onConfirm={() => {}}
      message="">
      <div>
        <Input id="name" name="name" label="Name" placeholder="" />
      </div>
    </ConfirmModal>
  );
};
