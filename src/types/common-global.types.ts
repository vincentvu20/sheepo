import { AxiosRequestConfig } from 'axios';

export interface IOptionRequest extends AxiosRequestConfig<any> {
  suffix?: string;
}

export interface IErrorsProps {
  message: string;
  error: any;
  data: any;
}
