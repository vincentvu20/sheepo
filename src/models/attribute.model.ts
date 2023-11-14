import { DefaultStatus } from '@/types/common-global.types';

export interface IAttribute {
  id: string;
  name: string;
  status: `${DefaultStatus}`;
  type: 'admin' | 'user';
  created_at: string;
  updated_at: string;
  deleted_at: string;
}
export interface IPayloadCreateAttribute {
  name: string;
}

export interface IPayloadUpdateAttribute {
  name?: string;
  status?: `${DefaultStatus}`;
}
