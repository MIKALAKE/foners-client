import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const transientSlice = createSlice({
  name: 'transient',
  initialState,
  reducers: {
    updateProps: (state, action) => {
      return { ...state, ...action.payload };
    }
  }
});

export const { updateProps } = transientSlice.actions;

export default transientSlice.reducer;
