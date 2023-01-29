import { createAsyncThunk } from "@reduxjs/toolkit";
import { spotifyApi } from "../../hooks";

export const searchTrack = createAsyncThunk<
  SpotifyApi.TrackSearchResponse,
  string,
  { rejectValue: string }
>("song/search", async (search, thunkAPI) => {
  try {
    return await spotifyApi.searchTracks(search);
  } catch (e) {
    if (e instanceof Error) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
});
