import { IErrorsProps } from '@/types/common-global.types';

export function handleErrors(error: any): IErrorsProps {
  return {
    message: error?.response?.data?.message || 'Something error',
    error: error.response.data,
    data: error.response.data,
  };
}
