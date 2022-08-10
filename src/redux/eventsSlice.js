import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getEventAsync = createAsyncThunk(
  'events/getEventAsync',
  async () => {
    const resp = await fetch('http://localhost:3000/v1/events/upcoming');
    if (resp.ok) {
      const json = await resp.json();
      return json;
    }
  }
);

export const getEventsAsync = createAsyncThunk(
  'events/getEventsAsync',
  async () => {
    const resp = await fetch('http://localhost:3000/v1/events');
    if (resp.ok) {
      const json = await resp.json();
      return json;
    }
  }
);

export const deleteEventAsync = createAsyncThunk(
  'events/deleteEventAsync',
  async payload => {
    const resp = await fetch(`http://localhost:3000/v1/events/${payload.id}`, {
      method: 'DELETE'
    });

    if (resp.ok) {
      return { id: payload.id };
    }
  }
);

export const addEventAsync = createAsyncThunk(
  'events/addEventAsync',
  async payload => {
    const resp = await fetch('http://localhost:3000/v1/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (resp.ok) {
      const json = await resp.json();
      return json;
    }
  }
);

export const editEventAsync = createAsyncThunk(
  'events/editEventAsync',
  async payload => {
    const resp = await fetch(`http://localhost:3000/v1/events/${payload.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (resp.ok) {
      const json = await resp.json();
      return json;
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
