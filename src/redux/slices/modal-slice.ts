import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IModalState } from './types';

const PREFIX_AUTH_SLICE = '_MODAL_';

const initialState = {
  isVisible: false,
  content: null,
} as IModalState;

const modalSlice = createSlice({
  name: PREFIX_AUTH_SLICE,
  initialState,
  reducers: {
    showModal(state: IModalState, action: PayloadAction<React.ReactNode>) {
      state.content = action.payload;
      state.isVisible = true;
    },
    dismissModal(state: IModalState) {
      state.isVisible = false;
    },
    clearContent(state: IModalState) {
      state.content = null;
    },
  },
});

export const { showModal, dismissModal, clearContent } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
