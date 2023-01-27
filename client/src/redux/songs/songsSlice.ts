import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  searchedTracks: [],
  savedTracks: [],
  currentTrack: {},
  lyrics: "",
  isLoading: false,
  error: null,
};

const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {},
  extraReducers: {},
});

export const songsReducer = songsSlice.reducer;
