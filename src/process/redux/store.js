import { configureStore } from '@reduxjs/toolkit';

import eventsReducer from './eventsSlice';
import constructorsReducer from './constructorsSlice';

export default configureStore({
  reducer: {
    events: eventsReducer,
    constructors: constructorsReducer
  }
});
