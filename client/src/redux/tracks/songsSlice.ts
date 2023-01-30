import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  getLyrics,
  getSavedTracks,
  removeTrackFromSaved,
  saveTrack,
  searchTracks,
} from "./operations";
import { ISongsInitialState } from "../../interfaces/intesfaces";
import { mapSavedTracks, mapSearchedTracks } from "./helpers";

const extraActions = [
  getLyrics,
  getSavedTracks,
  saveTrack,
  searchTracks,
  removeTrackFromSaved,
];

const initialState: ISongsInitialState = {
  searchedTracks: [],
  searchSavedTracks: [],
  savedTracks: [],
  currentTrack: null,
  lyrics: "",
  isLoading: false,
  error: undefined,
};

const tracksSlice = createSlice({
  name: "tracks",
  initialState,
  reducers: {
    setCurrentTrack(state, action) {
      state.currentTrack = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(removeTrackFromSaved.fulfilled, (state, action) => {
        if (action.payload) {
          state.savedTracks = state.savedTracks.filter(({ id: trackId }) => {
            return !action.payload?.find((id) => id === trackId);
          });
        }
      })
      .addCase(searchTracks.fulfilled, (state, action) => {
        if (action.payload?.tracks) {
          state.searchedTracks = mapSearchedTracks(action.payload.tracks);
        }
        if (action.payload?.isSaved) {
          state.searchSavedTracks = action.payload.isSaved;
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

export const { setCurrentTrack } = tracksSlice.actions;

export const tracksReducer = tracksSlice.reducer;
