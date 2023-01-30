import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  getLyrics,
  getSavedTracks,
  saveTrack,
  searchTracks,
} from "./operations";
import { ISongsInitialState } from "../../interfaces/intesfaces";
import { mapSavedTracks, mapSearchedTracks } from "./helpers";

const extraActions = [getLyrics, getSavedTracks, saveTrack, searchTracks];

const initialState: ISongsInitialState = {
  searchedTracks: [],
  savedTracks: [],
  currentTrack: null,
  lyrics: "",
  isLoading: false,
  error: undefined,
};

const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    setCurrentTrack(state, action) {
      state.currentTrack = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(searchTracks.fulfilled, (state, action) => {
        if (action.payload) {
          state.searchedTracks = mapSearchedTracks(action.payload);
        }
      })
      .addCase(getLyrics.fulfilled, (state, action) => {
        state.lyrics = action.payload;
      })
      .addCase(saveTrack.fulfilled, (state, action) => {
        if (action.payload) {
          state.savedTracks.push(action.payload);
        }
      })
      .addCase(getSavedTracks.fulfilled, (state, action) => {
        if (action.payload) {
          state.savedTracks = mapSavedTracks(action.payload);
        }
      })
      .addMatcher(
        // @ts-ignore
        isAnyOf(...extraActions.map((action) => action.pending)),
        (state) => {
          state.isLoading = true;
          state.error = undefined;
        }
      )
      .addMatcher(
        // @ts-ignore
        isAnyOf(...extraActions.map((action) => action.rejected)),
        (state, action) => {
          state.isLoading = true;
          state.error = action.payload;
        }
      )
      .addMatcher(
        // @ts-ignore
        isAnyOf(...extraActions.map((action) => action.fulfilled)),
        (state) => {
          state.isLoading = false;
          state.error = undefined;
        }
      ),
});

export const { setCurrentTrack } = songsSlice.actions;

export const songsReducer = songsSlice.reducer;
