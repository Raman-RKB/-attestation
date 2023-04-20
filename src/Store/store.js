/* eslint-disable no-fallthrough */
import { configureStore } from "@reduxjs/toolkit";
import { GitSearchApp } from '../services/servises';

const GET_USERS = "GET_USERS";

export const pushUsersToStore = (data) => ({
  type: GET_USERS,
  payload: { data },
});

export function reducerUsers(state = [], action) {
  switch (action.type) {
    case GET_USERS: {
      const { data } = action.payload;
      if (data) {
        return data
      }
    }
    default:
      return state;
  }
}

export const store = configureStore({
  reducer: {
    [GitSearchApp.reducerPath]: GitSearchApp.reducer,
    users: reducerUsers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(GitSearchApp.middleware),
});

export default store;