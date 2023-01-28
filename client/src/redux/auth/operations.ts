import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import SpotifyWebApi from "spotify-web-api-node";
import { ILogin, IRefresh } from "../../interfaces/intesfaces";

const { REACT_APP_SERVER_HOST: address = "/", REACT_APP_CLIENT_ID: clientId } =
  process.env;

const spotifyApi = new SpotifyWebApi({ clientId });

export const login = createAsyncThunk<ILogin, string, { rejectValue: string }>(
  "auth/login",
  async (code, thunkAPI) => {
    try {
      const { data } = await axios.post(`${address}/auth/login`, { code });

      spotifyApi.setAccessToken(data.accessToken);

      window.history.pushState({}, "", "/");
      return data;
    } catch (e) {
      // @ts-ignore
      window.location = "/login";

      if (e instanceof Error) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  }
);

export const refresh = createAsyncThunk<
  IRefresh,
  string,
  { rejectValue: string }
>("auth/refresh", async (refreshToken, thunkAPI) => {
  try {
    const { data } = await axios.post(`${address}/auth/refresh`, {
      refreshToken,
    });

    spotifyApi.setAccessToken(data.accessToken);

    return data;
  } catch (e) {
    // @ts-ignore
    window.location = "/login";

    if (e instanceof Error) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
});
