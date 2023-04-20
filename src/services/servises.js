/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const GitSearchApp = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com/",
  }),

  endpoints: (builder) => ({

    getUsers: builder.query({
      query: ({ userName, page }) => `search/users?q=${userName}&page=${page ? page : 1}`,
    }),

    getUsersByAscendingRepsQuantity: builder.query({
      query: ({ userName, page }) => `search/users?q=${userName}&sort=repositories&order=asc&page=${page ? page : 1}`,
    }),

    getUsersByDescendingRepsQuantity: builder.query({
      query: ({ userName, page }) => `search/users?q=${userName}&sort=repositories&order=desc&page=${page ? page : 1}`,
    }),

    getUsersReps: builder.query({
      query: (userName) => `users/${userName}/repos`,
    }),
  })
});

export const {
  useGetUsersQuery,
  useGetUsersRepsQuery,
  useGetUsersByAscendingRepsQuantityQuery,
  useGetUsersByDescendingRepsQuantityQuery,
} = GitSearchApp;

