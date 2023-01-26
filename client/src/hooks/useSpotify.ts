import { useEffect } from "react";
import SpotifyWeApi from "spotify-web-api-node";

const { REACT_APP_CLIENT_ID: clientId } = process.env;

export const spotifyApi = new SpotifyWeApi({
  clientId,
});

export const useSpotify = (token: string): void => {
  useEffect(() => {
    if (!token) {
      return;
    }
    spotifyApi.setAccessToken(token);
  }, [token]);
};
