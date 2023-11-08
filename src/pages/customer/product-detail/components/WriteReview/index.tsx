import { Input, RatingView } from '@/components';
import FormModal from '@/components/FormModal';

interface WriteReviewProps {
  star: number;
  isOpen: boolean;
  onClose: () => void;
}

export const WriteReview = ({ star, isOpen, onClose }: WriteReviewProps) => {
  return (
    <FormModal open={isOpen} toggle={onClose} title="Writing a Review">
      <div className="mt-5">
        <div className="flex justify-center mb-5">
          <RatingView value={star} />
        </div>
        <Input
          multiline
          className="!rounded"
          placeholder="Please share what you like about this product"
        />
      </div>
    </FormModal>
  );
};
