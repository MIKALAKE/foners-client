import axios from 'axios';
import baseUrl from '../api/index';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const addConstructor = createAsyncThunk(
  'constructors/addConstructor',
  async payload => {
    try {
      const res = await axios.post(`${baseUrl}/constructors`, payload);
      return res.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const getConstructors = createAsyncThunk(
  'constructors/getConstructors',
  async () => {
    try {
      const res = await axios.get(`${baseUrl}/constructors/`);
      return res.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const getConstructor = createAsyncThunk(
  'constructors/getConstructor',
  async payload => {
    try {
      const res = await axios.get(`${baseUrl}/constructors/${payload.id}`);
      return res.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const editConstructor = createAsyncThunk(
  'constructors/editConstructor',
  async payload => {
    try {
      const res = await axios.put(
        `${baseUrl}/constructors/${payload.id}`,
        payload
      );
      return res.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const deleteConstructor = createAsyncThunk(
  'constructors/deleteConstructor',
  async payload => {
    try {
      await axios.delete(`${baseUrl}/constructors/${payload.id}`);
      return { id: payload.id };
    } catch (err) {
      return err.message;
    }
  }
);

export const constructorsSlice = createSlice({
  name: 'constructors',
  initialState: { constructor: {}, constructors: [] },
  extraReducers: {
    [addConstructor.fulfilled]: (state, { payload }) => {
      return { ...state, constructors: [...state.constructors, payload] };
    },
    [getConstructor.fulfilled]: (state, { payload }) => {
      return { ...state, constructor: payload };
    },
    [getConstructors.fulfilled]: (state, { payload }) => {
      return { ...state, constructors: payload };
    },
    [deleteConstructor.fulfilled]: (state, { payload }) => {
      const filter = constructor => constructor.id !== payload.id;
      const filteredConstructors = state.constructors.filter(filter);
      return { ...state, constructors: filteredConstructors };
    },
    [editConstructor.fulfilled]: (state, { payload }) => {
      const newConstructors = [...state.constructors];
      const find = constructor => constructor.id === payload.id;
      const index = newConstructors.findIndex(find);
      newConstructors[index] = payload;
      return { ...state, constructors: newConstructors };
    }
  }
});

export default constructorsSlice.reducer;
