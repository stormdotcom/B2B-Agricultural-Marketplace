import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import requirementsReducer from '../features/requirements/requirementsSlice';

export const store = configureStore({
  reducer: {
    requirements: requirementsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),
});
