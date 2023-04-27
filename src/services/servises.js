/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const GITHUB_TOKEN = "YOUR_PERSONAL_ACCESS_TOKEN_HERE";

// const addAuthorizationHeader = (headers) => {
//   headers.set("Authorization", `Token ${GITHUB_TOKEN}`);
// };

export const GitSearchApp = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com/",
    // prepareHeaders: (headers) => {
    //   addAuthorizationHeader(headers);
    //   return headers;
    // },
  }),

  endpoints: (builder) => ({

    getUsers: builder.query({
      query: ({ userName, page }) => {
        if (userName || page) {
          return `search/users?q=${userName}&page=${page ? page : 1}`;
        } else {
          return '';
        }
      },
    }),

    getUsersByAscendingRepsQuantity: builder.query({
      query: ({ userName, page }) => {
        if (userName || page) {
          return `search/users?q=${userName}&sort=repositories&order=asc&page=${page ? page : 1}`;
        } else {
          return '';
        }
      },
    }),

    getUsersByDescendingRepsQuantity: builder.query({
      query: ({ userName, page }) => {
        if (userName || page) {
          return `search/users?q=${userName}&sort=repositories&order=desc&page=${page ? page : 1}`
        } else {
          return '';
        }
      },
    }),

    getUserData: builder.query({
      query: (userName) => {
        if (userName) {
          return `users/${userName}`;
        } else {
          return '';
        }
      },
    }),

  })
});

export const {
  useGetUsersQuery,
  useGetUserDataQuery,
  useGetUsersByAscendingRepsQuantityQuery,
  useGetUsersByDescendingRepsQuantityQuery,
} = GitSearchApp;
