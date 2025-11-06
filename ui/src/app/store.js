import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import farmersReducer from "../features/farmers/farmersSlice";
import requirementsReducer from '../features/requirements/requirementsSlice';

export const store = configureStore({
  reducer: {
    requirements: requirementsReducer,
    farmers: farmersReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),
});
