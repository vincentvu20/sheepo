import { createSlice } from '@reduxjs/toolkit';
import { IState } from './types';

const PREFIX_CART_SLICE = '_CART_';

const initialState: IState = {
  items: [],
};

const cartSlice = createSlice({
  name: PREFIX_CART_SLICE,
  initialState,
  reducers: {
    setCart(state, action) {
      state.items = action.payload;
    },
  },
});

export const { setCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
