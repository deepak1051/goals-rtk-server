import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../../utils/instance';

const getAllGoals = createAsyncThunk(
  'goals/getAll',
  async (goalData, { rejectWithValue, getState }) => {
    const token = getState().auth.user.token;
    try {
      const { data } = await instance.get('/goals', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return rejectWithValue(message);
    }
  }
);

const addGoal = createAsyncThunk(
  'todo/add',
  async (goalData, { rejectWithValue, getState }) => {
    const token = getState().auth.user.token;
    console.log(goalData);
    try {
      const { data } = await instance.post(
        '/goals',
        { text: goalData },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return rejectWithValue(message);
    }
  }
);

const deleteGoal = createAsyncThunk(
  'todo/delete',
  async (id, { rejectWithValue, getState }) => {
    const token = getState().auth.user.token;

    try {
      const { data } = await instance.delete(
        `/goals/${id}`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return rejectWithValue(message);
    }
  }
);

const updateGoal = createAsyncThunk(
  'todo/update',
  async (goalData, { rejectWithValue, getState }) => {
    const token = getState().auth.user.token;

    try {
      const { data } = await instance.put(
        `/goals/${goalData.id}`,
        { text: goalData.text },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return rejectWithValue(message);
    }
  }
);

export { getAllGoals, addGoal, deleteGoal, updateGoal };
