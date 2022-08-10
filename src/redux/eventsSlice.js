import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getEventAsync = createAsyncThunk(
  'events/getEventAsync',
  async () => {
    try {
      const res = await axios.get('http://localhost:3000/v1/events/upcoming');
      return res.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const getEventsAsync = createAsyncThunk(
  'events/getEventsAsync',
  async () => {
    try {
      const res = await axios.get('http://localhost:3000/v1/events');
      return res.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const deleteEventAsync = createAsyncThunk(
  'events/deleteEventAsync',
  async payload => {
    try {
      const res = await axios.delete(
        `http://localhost:3000/v1/events/${payload.id}`
      );
      return { id: payload.id };
    } catch (err) {
      return err.message;
    }
  }
);

export const addEventAsync = createAsyncThunk(
  'events/addEventAsync',
  async payload => {
    try {
      const res = await axios.post('http://localhost:3000/v1/events', payload);
      return res.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const editEventAsync = createAsyncThunk(
  'events/editEventAsync',
  async payload => {
    try {
      const res = await axios.put(
        `http://localhost:3000/v1/events/${payload.id}`,
        payload
      );
      return res.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const eventsSlice = createSlice({
  name: 'events',
  initialState: { event: {}, events: [] },
  extraReducers: {
    [getEventsAsync.fulfilled]: (state, { payload }) => {
      return { ...state, events: payload };
    },
    [addEventAsync.fulfilled]: (state, { payload }) => {
      return { ...state, events: [...state.events, payload] };
    },
    [getEventAsync.fulfilled]: (state, { payload }) => {
      return { ...state, event: payload };
    },
    [deleteEventAsync.fulfilled]: (state, { payload }) => {
      const filter = event => event.id !== payload.id;
      const filteredEvents = state.events.filter(filter);
      return { ...state, events: filteredEvents };
    },
    [editEventAsync.fulfilled]: (state, { payload }) => {
      const newEvents = [...state.events];
      const find = event => event.id === payload.id;
      const index = newEvents.findIndex(find);
      newEvents[index] = payload;
      return { ...state, events: newEvents };
    }
  }
});

export const { deleteEvent, editEvent, getEvent, getEvents } =
  eventsSlice.actions;

export default eventsSlice.reducer;
