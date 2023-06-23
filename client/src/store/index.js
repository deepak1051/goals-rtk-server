import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/authSlice';
import { goalReducer } from './slices/goalSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    goal: goalReducer,
  },
});

export * from './thunks/auth';
export * from './slices/authSlice';
export * from './thunks/goal';
