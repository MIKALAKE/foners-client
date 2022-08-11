import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { createLogger } from 'redux-logger';
import eventsReducer from '../slices/eventsSlice';
import driversReducer from '../slices/driversSlice';
import constructorsReducer from '../slices/constructorsSlice';

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
