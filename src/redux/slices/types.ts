export interface IAuthState {
  accessToken?: string;
  adminAccessToken?: string;
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

export enum TokenType {
  Admin = 'adminAccessToken',
  Normal = 'accessToken',
}

export interface ILogin {
  email: string;
  password: string;
  userType?: UserType;
}
