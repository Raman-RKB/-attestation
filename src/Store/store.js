/* eslint-disable no-fallthrough */
import { configureStore } from "@reduxjs/toolkit";
import { appApi } from '../services/servises';

const ADD_TRACK_ID = "ADD_TRACK_ID";
const GET_ALL_TRACKS = "GET_ALL_TRACKS";
const PUSH_PLAYING_TRACK_LINK = "PUSH_PLAYING_TRACK_LINK";

export const pushLinkToStore = (link) => ({
  type: PUSH_PLAYING_TRACK_LINK,
  payload: { link },
});

export const pushIdToStore = (id) => ({
  type: ADD_TRACK_ID,
  payload: { id },
});

export const pushAllTracksToStore = (data) => ({
  type: GET_ALL_TRACKS,
  payload: { data },
});

export function reducerTrackLink(state = '', action) {
  switch (action.type) {
    case PUSH_PLAYING_TRACK_LINK: {
      const { link } = action.payload;
      return link
    }
    default:
      return state;
  }
}

export function reducerTrackId(state = '', action) {
  switch (action.type) {
    case ADD_TRACK_ID: {
      const { id } = action.payload;
      return id
    }
    default:
      return state;
  }
}

export function reducerAllTracks(state = [], action) {
  switch (action.type) {
    case GET_ALL_TRACKS: {
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
    [appApi.reducerPath]: appApi.reducer,
    trackId: reducerTrackId,
    allTracks: reducerAllTracks,
    playingTrackLink: reducerTrackLink
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appApi.middleware),
});

export default store;