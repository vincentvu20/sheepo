import { ICategory } from '@/types/category.types';
import { IMessageResponse } from '@/types/common-global.types';

export interface ICategoryInitState {
  categories?: ICategory[];
  category?: ICategory;
  message?: IMessageResponse;
}
