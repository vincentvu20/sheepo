import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { NetworkService } from '@/services/network-service';
import {
  ICreateCategory,
  IQueryParamCategory,
  IUpdateCategory,
} from '@/types/category.types';
import { IUpdate } from '@/types/common-global.types';
import { ICategoryInitState } from '../types/category.redux.types';

const PREFIX_CATEGORY_SLICE = 'CATEGORY';

export const getListCategory = createAsyncThunk(
  `${PREFIX_CATEGORY_SLICE}/LIST`,
  async (params: IQueryParamCategory, { rejectWithValue }) => {
    try {
      const { data } = await NetworkService.get('CATEGORY', {
        params,
        isCms: true,
      });
      return data;
    } catch (error) {
      throw rejectWithValue(error);
    }
  },
);

export const getDetailCategory = createAsyncThunk(
  `${PREFIX_CATEGORY_SLICE}/DETAIL`,
  async (id: number, { rejectWithValue }) => {
    try {
      const { data } = await NetworkService.get('CATEGORY', {
        suffix: `/${id}`,
        isCms: true,
      });
      return data;
    } catch (error) {
      throw rejectWithValue(error);
    }
  },
);

export const updateCategory = createAsyncThunk(
  `${PREFIX_CATEGORY_SLICE}/UPDATE`,
  async (body: IUpdate<IUpdateCategory>, { rejectWithValue }) => {
    try {
      const { data } = await NetworkService.patch('CATEGORY', body.data, {
        suffix: `/${body.id}`,
        isCms: true,
      });
      return data;
    } catch (error) {
      throw rejectWithValue(error);
    }
  },
);

export const deleteCategory = createAsyncThunk(
  `${PREFIX_CATEGORY_SLICE}/UPDATE`,
  async (id: number, { rejectWithValue }) => {
    try {
      const { data } = await NetworkService.delete('CATEGORY', {
        suffix: `/${id}`,
        isCms: true,
      });
      return data;
    } catch (error) {
      throw rejectWithValue(error);
    }
  },
);

export const createCategory = createAsyncThunk(
  `${PREFIX_CATEGORY_SLICE}/CREATE`,
  async (body: ICreateCategory, { rejectWithValue }) => {
    try {
      const { data } = await NetworkService.post('CATEGORY', body, {
        isCms: true,
      });
      return data;
    } catch (error) {
      throw rejectWithValue(error);
    }
  },
);

const initialState: ICategoryInitState = {
  categories: undefined,
  category: undefined,
  totalItem: undefined,
  message: undefined,
};

const categorySlice = createSlice({
  name: PREFIX_CATEGORY_SLICE,
  initialState,
  reducers: {},
});

export const categoryReducer = categorySlice.reducer;
