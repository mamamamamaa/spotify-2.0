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
  // extraReducers: (builder) =>
  //   builder.addCase(, (state, action) => {
  //   }),
});

export const songsReducer = songsSlice.reducer;
