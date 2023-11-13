import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  IPayloadCreateAttribute,
  IPayloadUpdateAttribute,
} from '@/models/attribute.model';
import { NetworkService } from '@/services/network-service';
import { IPaginationParam } from '@/types/common-global.types';
import { IAttributeState } from './types';

const PREFIX_ATTRIBUTE_SLICE = '_ATTRIBUTE_';

export const getListAttribute = createAsyncThunk(
  `${PREFIX_ATTRIBUTE_SLICE}/LIST`,
  async (params: IPaginationParam, { rejectWithValue }) => {
    try {
      const { data } = await NetworkService.get('ATTRIBUTE', {
        params: { ...params, sortOrder: 'desc', sortBy: 'created_at' },
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

export const updateAttribute = createAsyncThunk(
  `${PREFIX_ATTRIBUTE_SLICE}/UPDATE`,
  async (
    { data, id }: { data: IPayloadUpdateAttribute; id: string },
    { rejectWithValue },
  ) => {
    try {
      const res = await NetworkService.patch('ATTRIBUTE', data, {
        suffix: `/${id}`,
        isCms: true,
      });
      return res;
    } catch (error) {
      throw rejectWithValue(error);
    }
  },
);

export const getDetailAttribute = createAsyncThunk(
  `${PREFIX_ATTRIBUTE_SLICE}/DETAIL`,
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await NetworkService.get('ATTRIBUTE', {
        suffix: `/${id}`,
        isCms: true,
      });
      return res;
    } catch (error) {
      throw rejectWithValue(error);
    }
  },
);

export const deleteAttribute = createAsyncThunk(
  `${PREFIX_ATTRIBUTE_SLICE}/DELETE`,
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await NetworkService.delete('ATTRIBUTE', {
        suffix: `/${id}`,
        isCms: true,
      });
      return res;
    } catch (error) {
      throw rejectWithValue(error);
    }
  },
);

const initialState = {
  attribute: undefined,
  attributes: undefined,
} as IAttributeState;

const attributeSlice = createSlice({
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

export const attributeReducer = attributeSlice.reducer;
