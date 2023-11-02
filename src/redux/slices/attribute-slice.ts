import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IPayloadCreateAttribute } from '@/models/attribute.model';
import { NetworkService } from '@/services/network-service';
import { IPaginationParam } from '@/types/common-global.types';
import { IAttributeState } from './types';

const PREFIX_ATTRIBUTE_SLICE = '_ATTRIBUTE_';

export const getListAttribute = createAsyncThunk(
  `${PREFIX_ATTRIBUTE_SLICE}/LIST`,
  async (params: IPaginationParam, { rejectWithValue }) => {
    try {
      const { data } = await NetworkService.get('ATTRIBUTE', {
        params,
        isCms: true,
      });
      return data;
    } catch (error) {
      throw rejectWithValue(error);
    }
  },
);

export const createAttribute = createAsyncThunk(
  `${PREFIX_ATTRIBUTE_SLICE}/CREATE`,
  async (body: IPayloadCreateAttribute, { rejectWithValue }) => {
    try {
      const { data } = await NetworkService.post(
        'ATTRIBUTE',
        { ...body, type: 'admin' },
        {
          isCms: true,
        },
      );
      return data;
    } catch (error) {
      throw rejectWithValue(error);
    }
  },
);

const initialState = {
  attribute: undefined,
  attributes: undefined,
} as IAttributeState;

const categorySlice = createSlice({
  name: PREFIX_ATTRIBUTE_SLICE,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getListAttribute.fulfilled, (state, action) => {
      if (action?.payload?.data) {
        state.attributes = action.payload.data;
      }
    });
  },
});

export const categoryReducer = categorySlice.reducer;
