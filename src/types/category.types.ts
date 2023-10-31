import { DefaultStatus, IPaginationParam } from './common-global.types';

export interface ICategory {
  id: string;
  name: string;
  status: DefaultStatus;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export interface IUpdateCategory {
  name?: string;
  status?: DefaultStatus;
}

export interface ICreateCategory {
  name: string;
}

export interface IQueryParamCategory extends IPaginationParam {
  content?: string;
}
