import { createAsyncThunk } from '@reduxjs/toolkit';
import { NetworkService } from '@/services/network-service';

const PREFIX_PRODUCT_SLICE = 'PRODUCT';

export const getDetailProduct = createAsyncThunk(
  `${PREFIX_PRODUCT_SLICE}/DETAIL`,
  async (id: number, { rejectWithValue }) => {
    try {
      const { data } = await NetworkService.get('PRODUCT', {
        suffix: `/${id}`,
        isCms: true,
      });

      return data;
    } catch (error) {
      throw rejectWithValue(error);
    }
  },
);
