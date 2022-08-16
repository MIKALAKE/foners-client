import { createLogger } from 'redux-logger';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import eventsReducer from 'process/slices/eventsSlice';
import driversReducer from 'process/slices/driversSlice';
import constructorsReducer from 'process/slices/constructorsSlice';

const logger = createLogger({
  collapsed: true
});

const reducer = combineReducers({
  events: eventsReducer,
  drivers: driversReducer,
  constructors: constructorsReducer
});

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
});

export default store;
