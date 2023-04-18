/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseQueryWithReauth = async (args, api, extraOptions) => {
  console.log('попадает в baseQueryWithReauth')
  let result = await api.baseQuery(args, api.endpoints, extraOptions);

  if (result.error && result.error.status === 401) {
    const refreshResult = await api.baseQuery(
      {
        url: 'https://painassasin.online/user/token/refresh/',
        method: 'POST',
        body: { refresh: localStorage.getItem('refresh_token') },
      },
      api.endpoints,
      extraOptions
    );
    if (refreshResult?.data) {
      localStorage.setItem('access_token', refreshResult.data.access);
      result = await api.baseQuery(args, api.endpoints, extraOptions);
    } else {
      console.log('Токен не обновился')
    }
  }
  return result;
};

export const appApi = createApi({
  reducerPath: "appApi",
  tagTypes: ['allTracks', 'token'],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://painassasin.online/",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('access_token');
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
    baseQueryWithReauth,
  }),

  endpoints: (builder) => ({

    registerUser: builder.mutation({
      query: (userData) => ({
        url: 'user/signup/',
        method: 'POST',
        body: userData
      }),
      transformResponse: (response) => {
        localStorage.setItem("user_register_id", response.id);
        localStorage.setItem("user_register_email", response.email);
        return response;
      },
    }),

    loginUser: builder.mutation({
      query: (userData) => ({
        url: '/user/login/',
        method: 'POST',
        body: userData
      }),
      queryFn: ({ baseQueryWithReauth, query }) => baseQueryWithReauth(query),
    }),

    getToken: builder.mutation({
      query: (userData) => ({
        url: '/user/token/',
        method: 'POST',
        body: userData
      }),
      queryFn: ({ baseQueryWithReauth, query }) => baseQueryWithReauth(query),
      transformResponse: (response) => {
        localStorage.setItem("refresh_token", response.refresh);
        localStorage.setItem("access_token", response.access);
        return response;
      },
    }),

    getAllTracks: builder.query({
      query: () => "/catalog/track/all/",
      providesTags: ['allTracks'],
      queryFn: ({ baseQueryWithReauth, query }) => baseQueryWithReauth(query),
    }),

    pushTrackToFavoriteById: builder.mutation({
      query: (id) => ({
        url: `catalog/track/${id}/favorite/`,
        method: 'POST',
        body: id
      }),
      invalidatesTags: ['allTracks'],
    }),

    removeTrackFromFavoriteById: builder.mutation({
      query: (id) => ({
        url: `catalog/track/${id}/favorite/`,
        method: 'DELETE',
        body: id
      }),
      invalidatesTags: ['allTracks'],
    }),

    getSelection: builder.query({
      query: () => "catalog/selection/",
    }),

  })
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetTokenMutation,
  useGetAllTracksQuery,
  usePushTrackToFavoriteByIdMutation,
  useRemoveTrackFromFavoriteByIdMutation,
  useGetSelectionQuery,
} = appApi;

