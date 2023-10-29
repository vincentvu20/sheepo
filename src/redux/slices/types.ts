export interface IAuthState {
  accessToken?: string;
  accessTokenCms?: string;
}

export interface IModalState {
  isVisible: boolean;
  content: React.ReactNode;
}
