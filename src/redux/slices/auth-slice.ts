import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ILogin, ISignup, UserType } from '@/models/authentication.model';
import { NetworkService } from '@/services/network-service';
import { IAuthState } from './types';

const PREFIX_AUTH_SLICE = '_AUTH_';
export const loginCms = createAsyncThunk(
  `${PREFIX_AUTH_SLICE}LOGIN_ADMIN`,
  async (body: ILogin, { rejectWithValue }) => {
    try {
      const { data } = await NetworkService.post('LOGIN_CMS', body, {
        isCms: true,
      });
      if (data && data?.accessToken) {
        return {
          ...data,
          type: UserType.Admin,
        };
      }
    } catch (error: any) {
      throw rejectWithValue(error);
    }
  },
);

export const login = createAsyncThunk(
  `${PREFIX_AUTH_SLICE}LOGIN`,
  async (body: ILogin, { rejectWithValue }) => {
    try {
      const { data } = await NetworkService.post('LOGIN', body);
      if (data && data?.accessToken) {
        return {
          ...data,
          type: UserType.Buyer,
        };
      }
    } catch (error: any) {
      throw rejectWithValue(error);
    }
  },
);

export const signup = createAsyncThunk(
  `${PREFIX_AUTH_SLICE}SIGNUP`,
  async (body: ISignup, { rejectWithValue }) => {
    try {
      const { data } = await NetworkService.post('SIGNUP', body);
      if (data && data?.accessToken) {
        return {
          ...data,
          type: UserType.Buyer,
        };
      }
    } catch (error: any) {
      throw rejectWithValue(error);
    }
  },
);

const initialState = {
  accessToken: undefined,
  accessTokenCms: undefined,
  profile: undefined,
} as IAuthState;

const authSlice = createSlice({
  name: PREFIX_AUTH_SLICE,
  initialState,
  reducers: {
    logout(state: IAuthState) {
      state.accessToken = undefined;
    },
    logoutCms(state: IAuthState) {
      state.accessTokenCms = undefined;
    },
    //to do, add getProfile
  },
  extraReducers: builder => {
    builder.addCase(loginCms.fulfilled, (state, action) => {
      if (action?.payload && action?.payload?.accessToken) {
        if (action.payload.type === UserType.Admin) {
          state.accessTokenCms = action.payload.accessToken;
          state.profile = jwtDecode(action.payload.accessToken);
        }
      }
    });
    builder.addCase(login.fulfilled, (state, action) => {
      if (action?.payload && action?.payload?.accessToken) {
        if (action.payload.type === UserType.Buyer) {
          state.accessToken = action.payload.accessToken;
        }
      }
    });
  },
});

export const { logout, logoutCms } = authSlice.actions;
export const authReducer = authSlice.reducer;
