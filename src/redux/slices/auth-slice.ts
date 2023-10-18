import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuthState } from './types';

const PREFIX_AUTH_SLICE = '_AUTH_';

const initialState = {
  accessToken: undefined,
  accessTokenCms: undefined,
} as IAuthState;

const authSlice = createSlice({
  name: PREFIX_AUTH_SLICE,
  initialState,
  reducers: {
    logout(state: IAuthState) {
      state.accessToken = undefined;
    },
    setIsLoggedCms(state: IAuthState, payload: PayloadAction<string>) {
      state.accessTokenCms = payload.payload;
    },
    logoutCms(state: IAuthState) {
      state.accessTokenCms = undefined;
    },
  },
});

export const { logout, setIsLoggedCms, logoutCms } = authSlice.actions;
export const authReducer = authSlice.reducer;
