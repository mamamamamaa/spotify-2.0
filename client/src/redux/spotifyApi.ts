import SpotifyWebApi from "spotify-web-api-node";

const { REACT_APP_CLIENT_ID: clientId } = process.env;

export const spotifyApi = new SpotifyWebApi({ clientId });
