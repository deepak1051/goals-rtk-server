import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/authSlice';
import { goalReducer } from './slices/goalSlice';
import { authApi } from './apis/authApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { goalsApi } from './apis/goalsApi';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    goal: goalReducer,
    [authApi.reducerPath]: authApi.reducer,
    [goalsApi.reducerPath]: goalsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(goalsApi.middleware);
  },
});

setupListeners(store.dispatch);

export * from './thunks/auth';
export * from './slices/authSlice';
export * from './thunks/goal';
export * from './apis/authApi';
