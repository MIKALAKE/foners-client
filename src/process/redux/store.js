import { configureStore } from '@reduxjs/toolkit';

import eventsReducer from './eventsSlice';
import driversReducer from './driversSlice';
import constructorsReducer from './constructorsSlice';

export default configureStore({
  reducer: {
    events: eventsReducer,
    drivers: driversReducer,
    constructors: constructorsReducer
  }
});
