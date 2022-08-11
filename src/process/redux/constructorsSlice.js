import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const addConstructorAsync = createAsyncThunk(
  'constructors/addConstructorAsync',
  async payload => {
    try {
      const res = await axios.post(
        'http://localhost:3000/v1/constructors',
        payload
      );
      return res.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const getConstructorsAsync = createAsyncThunk(
  'constructors/getConstructorAsync',
  async () => {
    try {
      const res = await axios.get('http://localhost:3000/v1/constructors/');
      return res.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const getConstructorAsync = createAsyncThunk(
  'constructors/getConstructorAsync',
  async () => {
    try {
      const res = await axios.get(
        'http://localhost:3000/v1/constructors/upcoming'
      );
      return res.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const editConstructorAsync = createAsyncThunk(
  'constructors/editconstructorAsync',
  async payload => {
    try {
      const res = await axios.put(
        `http://localhost:3000/v1/constructors/${payload.id}`,
        payload
      );
      return res.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const deleteConstructorAsync = createAsyncThunk(
  'constructors/deleteConstructorAsync',
  async payload => {
    try {
      await axios.delete(`http://localhost:3000/v1/constructors/${payload.id}`);
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
    [addConstructorAsync.fulfilled]: (state, { payload }) => {
      return { ...state, constructors: [...state.constructors, payload] };
    },
    [getConstructorAsync.fulfilled]: (state, { payload }) => {
      return { ...state, constructor: payload };
    },
    [getConstructorsAsync.fulfilled]: (state, { payload }) => {
      return { ...state, constructors: payload };
    },
    [deleteConstructorAsync.fulfilled]: (state, { payload }) => {
      const filter = constructor => constructor.id !== payload.id;
      const filteredConstructors = state.constructors.filter(filter);
      return { ...state, constructors: filteredConstructors };
    },
    [editConstructorAsync.fulfilled]: (state, { payload }) => {
      const newConstructors = [...state.constructors];
      const find = constructor => constructor.id === payload.id;
      const index = newConstructors.findIndex(find);
      newConstructors[index] = payload;
      return { ...state, constructors: newConstructors };
    }
  }
});

export default constructorsSlice.reducer;
