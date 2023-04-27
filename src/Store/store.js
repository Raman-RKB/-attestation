/* eslint-disable no-fallthrough */
import { configureStore } from "@reduxjs/toolkit";
import { GitSearchApp } from '../services/servises';

const GET_USERS = "GET_USERS";
const GET_USERS_DATA = "GET_USERS_DATA";
const CLEAR_USERS_DATA = "CLEAR_USERS_DATA";

export const clearUsersData = () => ({
  type: CLEAR_USERS_DATA,
});

export const pushUsersDataToStore = (data) => ({
  type: GET_USERS_DATA,
  payload: { data },
});

export const pushUsersToStore = (data) => ({
  type: GET_USERS,
  payload: { data },
});

export function reducerUsersData(state = [], action) {
  switch (action.type) {
    case GET_USERS_DATA: {
      const { data } = action.payload;
      if (data) {
        return data
      }
    }
    case CLEAR_USERS_DATA: {
      return [];
    }
    default:
      return state;
  }
}

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
    usersData: reducerUsersData,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(GitSearchApp.middleware),
});

export default store;