import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import Api from '../api';

export const logIn = createAsyncThunk('user/logIn', async payload => {
  try {
    const res = await Api.post(`/auth/sign_in`, payload);
    return { ...res.data.data, headers: res.headers };
  } catch (err) {
    return err.message;
  }
});

export const logOut = createAsyncThunk('user/logOut', async payload => {
  try {
    await Api.delete(`/auth/sign_out`);
    return { payload };
  } catch (err) {
    return err.message;
  }
});

export const register = createAsyncThunk('user/register', async payload => {
  try {
    const res = await Api.post(`/auth`, payload);
    return { ...res.data.data, headers: res.headers };
  } catch (err) {
    return err.message;
  }
});

export const userSlice = createSlice({
  name: 'user',
  initialState: {},
  extraReducers: {
    [logIn.fulfilled]: (state, { payload }) => {
      Api.setHeaders(payload.headers);
      return { ...payload, isLoggedIn: true };
    },
    [logOut.fulfilled]: () => {
      return { isLoggedIn: false };
    },
    [register.fulfilled]: (state, { payload }) => {
      Api.setHeaders(payload.headers);
      return { ...payload, isLoggetIn: true };
    }
  }
});

export default userSlice.reducer;
