import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const addDriverAsync = createAsyncThunk(
  'drivers/addDriverAsync',
  async payload => {
    try {
      const res = await axios.post('http://localhost:3000/v1/drivers', payload);
      return res.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const getDriverAsync = createAsyncThunk(
  'drivers/getDriverAsync',
  async payload => {
    try {
      const res = await axios.get(
        `http://localhost:3000/v1/drivers/${payload.id}`
      );
      return res.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const getDriversAsync = createAsyncThunk(
  'drivers/getDriversAsync',
  async () => {
    try {
      const res = await axios.get('http://localhost:3000/v1/drivers/');
      return res.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const editDriverAsync = createAsyncThunk(
  'drivers/editDriverAsync',
  async payload => {
    try {
      const res = await axios.put(
        `http://localhost:3000/v1/drivers/${payload.id}`,
        payload
      );
      return res.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const deleteDriverAsync = createAsyncThunk(
  'drivers/deleteDriverAsync',
  async payload => {
    try {
      await axios.delete(`http://localhost:3000/v1/drivers/${payload.id}`);
      return { id: payload.id };
    } catch (err) {
      return err.message;
    }
  }
);

export const driversSlice = createSlice({
  name: 'drivers',
  initialState: { driver: {}, drivers: [] },
  extraReducers: {
    [addDriverAsync.fulfilled]: (state, { payload }) => {
      return { ...state, drivers: [...state.drivers, payload] };
    },
    [getDriverAsync.fulfilled]: (state, { payload }) => {
      return { ...state, driver: payload };
    },
    [getDriversAsync.fulfilled]: (state, { payload }) => {
      return { ...state, drivers: payload };
    },
    [deleteDriverAsync.fulfilled]: (state, { payload }) => {
      const filter = driver => driver.id !== payload.id;
      const filtereddrivers = state.drivers.filter(filter);
      return { ...state, drivers: filtereddrivers };
    },
    [editDriverAsync.fulfilled]: (state, { payload }) => {
      const newDrivers = [...state.drivers];
      const find = driver => driver.id === payload.id;
      const index = newDrivers.findIndex(find);
      newDrivers[index] = payload;
      return { ...state, drivers: newDrivers };
    }
  }
});

export default driversSlice.reducer;
