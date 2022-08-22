import { createLogger } from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import userReducer from 'process/slices/userSlice';
import eventsReducer from 'process/slices/eventsSlice';
import driversReducer from 'process/slices/driversSlice';
import constructorsReducer from 'process/slices/constructorsSlice';

const logger = createLogger({
  collapsed: true
});

const persistConfig = {
  key: 'root',
  storage
};

const reducer = combineReducers({
  user: userReducer,
  events: eventsReducer,
  drivers: driversReducer,
  constructors: constructorsReducer
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false}).concat(logger)
});

export const persistedStore = persistStore(store);
