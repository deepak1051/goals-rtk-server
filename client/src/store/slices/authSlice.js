import { createSlice } from '@reduxjs/toolkit';
import { login, register } from '../thunks/auth';

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  error: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state, action) {
      localStorage.removeItem('user');
      state.user = null;
    },
    setCredentials(state, action) {
      localStorage.setItem('user', JSON.stringify(action.payload));
      state.user = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(register.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    //login
    builder.addCase(login.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { logout, setCredentials } = authSlice.actions;

export const authReducer = authSlice.reducer;
