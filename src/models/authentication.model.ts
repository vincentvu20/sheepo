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
}

export interface ISignup {
  email: string;
  password: string;
}
