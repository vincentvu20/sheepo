import { IAttribute } from '@/models/attribute.model';

export interface IAuthState {
  accessToken?: string;
  accessTokenCms?: string;
  profile?: any;
}

export interface IModalState {
  isVisible: boolean;
  content: React.ReactNode;
}

export interface IAttributeState {
  attribute?: IAttribute;
  attributes?: IAttribute[];
}

export type ItemType = {
  id: string;
  amount: number;
  price: number;
  size: string;
  color: string;
  name: string;
  src: string;
};

export interface IState {
  items: Array<ItemType>;
}
