import { createSlice } from '@reduxjs/toolkit';
import { IAuthState } from './types';

const PREFIX_AUTH_SLICE = '_AUTH_';

const initialState = {
  accessToken: undefined,
} as IAuthState;

const authSlice = createSlice({
  name: PREFIX_AUTH_SLICE,
  initialState,
  reducers: {
    logout(state: IAuthState) {
      state.accessToken = undefined;
    },
  },
});

export const { logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
