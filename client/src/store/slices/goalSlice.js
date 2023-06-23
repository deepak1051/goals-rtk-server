import { createSlice } from '@reduxjs/toolkit';
import { getAllGoals, addGoal, deleteGoal, updateGoal } from '../thunks/goal';

const initialState = {
  goals: [],
  error: null,
  isLoading: false,
};

const goalSlice = createSlice({
  name: 'goal',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllGoals.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getAllGoals.fulfilled, (state, action) => {
      state.isLoading = false;
      state.goals = action.payload;
    });
    builder.addCase(getAllGoals.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    //add goal

    builder.addCase(addGoal.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(addGoal.fulfilled, (state, action) => {
      state.isLoading = false;
      state.goals.push(action.payload);
    });
    builder.addCase(addGoal.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    //remove goal

    builder.addCase(deleteGoal.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(deleteGoal.fulfilled, (state, action) => {
      state.isLoading = false;
      state.goals = state.goals.filter(
        (item) => item._id !== action.payload.id
      );
    });
    builder.addCase(deleteGoal.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(updateGoal.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(updateGoal.fulfilled, (state, action) => {
      state.isLoading = false;
      const index = state.goals.findIndex((g) => g._id === action.payload._id);
      console.log(index);
      state.goals[index] = action.payload;
      // const updatedGoals = state.goals.map((goal) => {
      //   if (goal._id === action.payload.id) return action.payload;
      //   return goal;
      // });
      // return updatedGoals;
    });
    builder.addCase(updateGoal.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

// export const { logout } = goalSlice.actions;

export const goalReducer = goalSlice.reducer;
