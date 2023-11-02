import { IAttribute } from '@/models/attribute.model';

export interface IAuthState {
  accessToken?: string;
  accessTokenCms?: string;
}

export interface IModalState {
  isVisible: boolean;
  content: React.ReactNode;
}

export interface IAttributeState {
  attribute?: IAttribute;
  attributes?: IAttribute[];
}
