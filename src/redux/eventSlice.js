import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getEventAsync = createAsyncThunk(
  'events/getEventAsync',
  async () => {
    const resp = await fetch('http://localhost:3000/v1/events/upcoming');
    if (resp.ok) {
      const event = await resp.json();
      return { event };
    }
  }
);
export const getEventsAsync = createAsyncThunk(
  'events/getEventsAsync',
  async () => {
    const resp = await fetch('http://localhost:3000/v1/events');
    if (resp.ok) {
      const event = await resp.json();
      return { event };
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
      const event = await resp.json();
      return { event };
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
      const event = await resp.json();
      return { event };
    }
  }
);

export const eventSlice = createSlice({
  name: 'event',
  initialState: { event: {}, events: [] },
  reducers: {
    deleteEvent: (state, action) => {
      return state.events.filter(event => event.id !== action.payload.id);
    }
  },
  extraReducers: {
    [getEventsAsync.fulfilled]: (state, action) => {
      return { ...state, events: action.payload.event };
    },
    [addEventAsync.fulfilled]: (state, action) => {
      return { ...state, events: [...state.events, action.payload.event] };
    },
    [getEventAsync.fulfilled]: (state, action) => {
      return { ...state, event: action.payload.event };
    },
    [deleteEventAsync.fulfilled]: (state, action) => {
      return {
        ...state,
        events: state.events.filter(event => event.id !== action.payload.id)
      };
    },
    [editEventAsync.fulfilled]: (state, action) => {
      const newEvents = [...state.events];
      const index = newEvents.findIndex(
        event => event.id === action.payload.id
      );
      newEvents[index] = action.payload.event;
      return {
        ...state,
        events: newEvents
      };
    }
  }
});

export const { deleteEvent, editEvent, EventAsync, getEvent } =
  eventSlice.actions;

export default eventSlice.reducer;
