import { createLogger } from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import {
  constructorsReducer,
  driversReducer,
  eventsReducer,
  transientReducer,
  userReducer
} from 'process/slices';

const logger = createLogger({ collapsed: true });

const reducer = combineReducers({
  user: userReducer,
  events: eventsReducer,
  drivers: driversReducer,
  transient: transientReducer,
  constructors: constructorsReducer
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['transient']
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger)
});

export const persistedStore = persistStore(store);
