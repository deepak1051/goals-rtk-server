import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../../utils/instance';

const register = createAsyncThunk('auth/register', async (user, thunkApi) => {
  try {
    const { data } = await instance.post('/user/register', user);

    localStorage.setItem('user', JSON.stringify(data));
    return data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    console.log(message);

    return thunkApi.rejectWithValue(message);
  }
});

const login = createAsyncThunk('auth/login', async (user, thunkApi) => {
  try {
    const { data } = await instance.post('/user/login', user);

    localStorage.setItem('user', JSON.stringify(data));
    return data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    console.log(message);

    return thunkApi.rejectWithValue(message);
  }
});

export { register, login };
