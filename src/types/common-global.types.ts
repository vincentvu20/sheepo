import { AxiosRequestConfig } from 'axios';

export interface IOptionRequest extends AxiosRequestConfig<any> {
  suffix?: string;
  isCms?: boolean;
}

export interface IErrorsProps {
  message: string;
  error: any;
  data: any;
}

export enum DefaultStatus {
  Active = 'active',
  Inactive = 'inactive',
}

export interface IPaginationResponse<T> {
  data: T[];
  page: number;
  pageSize: number;
  totalPage: number;
  totalItem: number;
}

export interface IUpdate<T> {
  id: number;
  data: T;
}

export interface IPaginationParam {
  page?: number;
  pageSize?: number;
  sortOrder?: 'asc' | 'desc';
  sortBy?: string;
  content?: string;
}

export interface IMessageResponse {
  success: boolean;
  message: string;
}
