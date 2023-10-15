import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import jwt_decode from 'jwt-decode';
import { NetworkService } from '@/services/network-service';
import { IAuthState, ILogin, ITokenUser, TokenType, UserType } from './types';

const PREFIX_AUTH_SLICE = '_AUTH_';

const accessToken = localStorage.getItem(TokenType.Normal);

const adminAccessToken = localStorage.getItem(TokenType.Admin);

const initialState = {
  accessToken,
  adminAccessToken,
  user: undefined,
} as IAuthState;

export const login = createAsyncThunk(
  `${PREFIX_AUTH_SLICE}LOGIN`,
  async (body: ILogin, { rejectWithValue }) => {
    try {
      const { data } = await NetworkService.post('LOGIN', body);
      if (data && data?.accessToken) {
        const key =
          body?.userType && body.userType === UserType.Admin
            ? TokenType.Admin
            : TokenType.Normal;
        localStorage.setItem(key, data.accessToken);
        return data;
      }
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

const authSlice = createSlice({
  name: PREFIX_AUTH_SLICE,
  initialState,
  reducers: {
    logout(state: IAuthState) {
      state.accessToken = undefined;
      state.adminAccessToken = undefined;
    },
  },
  extraReducers: builder => {
    builder.addCase(login.fulfilled, (state, action) => {
      if (action?.payload && action?.payload?.accessToken) {
        const decoded: ITokenUser = jwt_decode(action.payload.accessToken);
        state[
          decoded.type === UserType.Admin ? TokenType.Admin : TokenType.Normal
        ] = action.payload.accessToken;
        state.user = decoded;
      }
    });
  },
});

export const { logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
