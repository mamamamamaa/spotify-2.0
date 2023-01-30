import { createAsyncThunk } from "@reduxjs/toolkit";
import { spotifyApi } from "../../hooks";
import axios from "axios/index";
import { Search } from "../../interfaces/intesfaces";

const NO_COVER =
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ANo_cover.JPG&psig=AOvVaw17nPxRIKb5bGQlaEo68ZzB&ust=1674314482495000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJjpldG51vwCFQAAAAAdAAAAABAE";

// export const searchTrack = createAsyncThunk<
//   string,
//   string,
//   { rejectValue: string }
// >("song/search", async (search, thunkAPI) => {
//   try {
//     return search;
//     // return await spotifyApi.searchTracks(search);
//   } catch (e) {
//     if (e instanceof Error) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// });

export const searchTracks = createAsyncThunk<
  SpotifyApi.PagingObject<SpotifyApi.TrackObjectFull> | undefined,
  string,
  { rejectValue: string }
>("songs/lyrics", async (query, thunkAPI) => {
  try {
    const {
      body: { tracks },
    } = await spotifyApi.searchTracks(query);

    return tracks;
  } catch (e) {
    if (e instanceof Error) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
});

export const getLyrics = createAsyncThunk<
  string,
  { artist: string; title: string },
  { rejectValue: string }
>("songs/lyrics", async (data, thunkAPI) => {
  try {
    const {
      data: { lyrics },
    } = await axios.get("http://localhost:3001/songs/lyrics", {
      params: data,
    });

    return lyrics;
  } catch (e) {
    if (e instanceof Error) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
});

export const saveTrack = createAsyncThunk<
  Search | undefined,
  Search,
  { rejectValue: string }
>("songs/save", async (track, thunkAPI) => {
  try {
    const { statusCode } = await spotifyApi.addToMySavedTracks([track.id]);
    return statusCode === 200 ? track : undefined;
  } catch (e) {
    if (e instanceof Error) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
});

export const getSavedTracks = createAsyncThunk<
  SpotifyApi.SavedTrackObject[] | undefined,
  undefined,
  { rejectValue: string }
>("songs/getSaved", async (_, thunkAPI) => {
  try {
    const {
      body: { items },
    } = await spotifyApi.getMySavedTracks();

    return items;
  } catch (e) {
    if (e instanceof Error) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
});
