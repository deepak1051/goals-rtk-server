import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const goalsApi = createApi({
  reducerPath: 'goalsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/goals',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.user.token;

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints(builder) {
    return {
      getGoals: builder.query({
        providesTags: ['Goals'],
        query: (goal) => {
          return {
            url: '/',
            method: 'GET',
          };
        },
      }),
      addGoal: builder.mutation({
        invalidatesTags: ['Goals'],
        query: (goal) => {
          return {
            url: `/`,
            method: 'POST',
            body: goal,
          };
        },
      }),

      updateGoal: builder.mutation({
        invalidatesTags: ['Goals'],
        query: (goal) => {
          return {
            url: `/${goal.id}`,
            method: 'PUT',
            body: goal,
          };
        },
      }),

      deleteGoal: builder.mutation({
        invalidatesTags: ['Goals'],
        query: (goalId) => {
          return {
            url: `/${goalId}`,
            method: 'Delete',
            body: goalId,
          };
        },
      }),
    };
  },
});

export const {
  useGetGoalsQuery,
  useAddGoalMutation,
  useUpdateGoalMutation,
  useDeleteGoalMutation,
} = goalsApi;
