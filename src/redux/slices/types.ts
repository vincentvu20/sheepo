export interface IAuthState {
  accessToken?: string;
  user?: ITokenUser;
}

export interface ITokenUser {
  sub: number;
  jti?: string;
  email: string;
  name?: string;
  iat?: number;
  exp?: number;
  type?: UserType;
}

export enum UserType {
  Admin = 'admin',
  Buyer = 'buyer',
}

export interface ILogin {
  email: string;
  password: string;
  userType?: UserType;
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
