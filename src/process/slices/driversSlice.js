import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const addDriver = createAsyncThunk(
  'drivers/addDriver',
  async payload => {
    try {
      const res = await axios.post('http://localhost:3000/v1/drivers', payload);
      return res.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const getDriver = createAsyncThunk(
  'drivers/getDriver',
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

export const getDrivers = createAsyncThunk('drivers/getDrivers', async () => {
  try {
    const res = await axios.get('http://localhost:3000/v1/drivers/');
    return res.data;
  } catch (err) {
    return err.message;
  }
});

export const editDriver = createAsyncThunk(
  'drivers/editDriver',
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

export const deleteDriver = createAsyncThunk(
  'drivers/deleteDriver',
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
    [addDriver.fulfilled]: (state, { payload }) => {
      return { ...state, drivers: [...state.drivers, payload] };
    },
    [getDriver.fulfilled]: (state, { payload }) => {
      return { ...state, driver: payload };
    },
    [getDrivers.fulfilled]: (state, { payload }) => {
      return { ...state, drivers: payload };
    },
    [deleteDriver.fulfilled]: (state, { payload }) => {
      const filter = driver => driver.id !== payload.id;
      const filtereddrivers = state.drivers.filter(filter);
      return { ...state, drivers: filtereddrivers };
    },
    [editDriver.fulfilled]: (state, { payload }) => {
      const newDrivers = [...state.drivers];
      const find = driver => driver.id === payload.id;
      const index = newDrivers.findIndex(find);
      newDrivers[index] = payload;
      return { ...state, drivers: newDrivers };
    }
  }
});

export default driversSlice.reducer;