import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import Api from '../api';

export const getEvent = createAsyncThunk('events/getEvent', async () => {
  try {
    const res = await Api.get(`/events/upcoming`);
    return res.data;
  } catch (err) {
    return err.message;
  }
});

export const getEvents = createAsyncThunk('events/getEvents', async query => {
  try {
    const res = await Api.get(`/events/?search=${query}`);
    return res.data;
  } catch (err) {
    return err.message;
  }
});

export const deleteEvent = createAsyncThunk(
  'events/deleteEvent',
  async payload => {
    try {
      await Api.delete(`/events/${payload.id}`);
      return { id: payload.id };
    } catch (err) {
      return err.message;
    }
  }
);

export const addEvent = createAsyncThunk('events/addEvent', async payload => {
  try {
    const res = await Api.post(`/events`, payload);
    return res.data;
  } catch (err) {
    return err.message;
  }
});

export const editEvent = createAsyncThunk('events/editEvent', async payload => {
  try {
    const res = await Api.put(`/events/${payload.id}`, payload);
    return res.data;
  } catch (err) {
    return err.message;
  }
});

export const eventsSlice = createSlice({
  name: 'events',
  initialState: { event: {}, events: [] },
  extraReducers: {
    [getEvents.fulfilled]: (state, { payload }) => {
      return { ...state, events: payload };
    },
    [addEvent.fulfilled]: (state, { payload }) => {
      return { ...state, events: [...state.events, payload] };
    },
    [getEvent.fulfilled]: (state, { payload }) => {
      return { ...state, event: payload };
    },
    [deleteEvent.fulfilled]: (state, { payload }) => {
      const filter = event => event.id !== payload.id;
      const filteredEvents = state.events.filter(filter);
      return { ...state, events: filteredEvents };
    },
    [editEvent.fulfilled]: (state, { payload }) => {
      const newEvents = [...state.events];
      const find = event => event.id === payload.id;
      const index = newEvents.findIndex(find);
      newEvents[index] = payload;
      return { ...state, events: newEvents };
    }
  }
});

export default eventsSlice.reducer;
