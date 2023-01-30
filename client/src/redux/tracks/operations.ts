import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { spotifyApi } from "../spotifyApi";
import { Search } from "../../interfaces/intesfaces";

interface ISearchTracksResult {
  tracks: SpotifyApi.PagingObject<SpotifyApi.TrackObjectFull> | undefined;
  isSaved: SpotifyApi.CheckUsersSavedTracksResponse | undefined;
}

export const searchTracks = createAsyncThunk<
  ISearchTracksResult | undefined,
  string,
  { rejectValue: string }
>("tracks/search", async (query, thunkAPI) => {
  try {
    const {
      body: { tracks },
    } = await spotifyApi.searchTracks(query);

    const ids = tracks?.items.map((track) => track.id);
    const data = ids && (await spotifyApi.containsMySavedTracks(ids));
    return { tracks, isSaved: data?.body };
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
>("tracks/lyrics", async (data, thunkAPI) => {
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
>("tracks/save", async (track, thunkAPI) => {
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
>("tracks/getSaved", async (_, thunkAPI) => {
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

export const removeTrackFromSaved = createAsyncThunk<
  string[] | undefined,
  string[],
  { rejectValue: string }
>("tracks/removeFromSaved", async (ids, thunkAPI) => {
  try {
    const { statusCode } = await spotifyApi.removeFromMySavedTracks(ids);
    if (statusCode === 200) {
      return ids;
    }
  } catch (e) {
    if (e instanceof Error) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
});
