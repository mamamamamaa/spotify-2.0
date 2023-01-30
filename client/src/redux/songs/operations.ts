import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { spotifyApi } from "../spotifyApi";
import { Search } from "../../interfaces/intesfaces";

interface ISearchTracksResult {
  tracks: SpotifyApi.PagingObject<SpotifyApi.TrackObjectFull> | undefined;
  isSaved: boolean[];
}

export const searchTracks = createAsyncThunk<
  SpotifyApi.PagingObject<SpotifyApi.TrackObjectFull> | undefined,
  string,
  { rejectValue: string }
>("songs/search", async (query, thunkAPI) => {
  try {
    const {
      body: { tracks },
    } = await spotifyApi.searchTracks(query);

    // if (tracks) {
    //   const ids = tracks.items.map((track) => track.id);
    //   const isSaved = await spotifyApi.containsMySavedTracks(ids);
    //   return { tracks, isSaved };
    // }

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
