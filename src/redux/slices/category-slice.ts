import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { NetworkService } from '@/services/network-service';
import { ICreateCategory, IUpdateCategory } from '@/types/category.types';
import { IPaginationParam, IUpdate } from '@/types/common-global.types';
import { ICategoryInitState } from '../types/category.redux.types';

const PREFIX_CATEGORY_SLICE = 'CATEGORY';

export const getListCategory = createAsyncThunk(
  `${PREFIX_CATEGORY_SLICE}/LIST`,
  async (params: IPaginationParam, { rejectWithValue }) => {
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
      console.log(data);
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
  message: undefined,
};

const categorySlice = createSlice({
  name: PREFIX_CATEGORY_SLICE,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getListCategory.fulfilled, (state, action) => {
      if (action?.payload?.data) {
        state.categories = action.payload.data;
      }
    });
    builder.addCase(getDetailCategory.fulfilled, (state, action) => {
      if (action?.payload?.data) {
        state.category = action.payload.data;
      }
    });
    builder.addCase(updateCategory.fulfilled, (state, action) => {
      if (action?.payload?.data) {
        state.message = action.payload.data;
      }
    });
    builder.addCase(createCategory.fulfilled, (state, action) => {
      if (action?.payload?.data) {
        state.category = action.payload.data;
      }
    });
  },
});

export const categoryReducer = categorySlice.reducer;
