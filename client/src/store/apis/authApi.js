import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/user' }),
  endpoints(builder) {
    return {
      register: builder.mutation({
        query: (user) => {
          return {
            url: '/register',
            method: 'POST',
            body: user,
          };
        },
      }),

      login: builder.mutation({
        query: (user) => {
          return {
            url: '/login',
            method: 'POST',
            body: user,
          };
        },
      }),
    };
  },
});

export const { useLoginMutation, useRegisterMutation } = authApi;
