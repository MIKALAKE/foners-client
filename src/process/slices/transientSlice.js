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
export default transientSlice.reducer;
export const { updateProps } = transientSlice.actions;
