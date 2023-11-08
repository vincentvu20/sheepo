import { Button, Input } from '@/components';
import FormModal from '@/components/FormModal';

interface DialogFormCategoryProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'create' | 'edit';
}

export default function DialogFormCategory({
  isOpen,
  onClose,
  type,
}: DialogFormCategoryProps) {
  return (
    <FormModal
      open={isOpen}
      toggle={onClose}
      title={type === 'create' ? 'Create Category' : 'Edit Category'}
      footer={
        <footer className="flex flex-row items-center justify-end px-6 py-6 space-x-6 ">
          <Button onClick={onClose} variant="empty">
            Cancel
          </Button>
          <Button>{type === 'create' ? 'Create' : 'Edit'}</Button>
        </footer>
      }>
      <div className="mt-6">
        <Input name="" placeholder="placeholder" label="Name" />
      </div>
    </FormModal>
  );
}
