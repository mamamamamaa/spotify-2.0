const SpotifyWebApi = require("spotify-web-api-node");
const lyricsFinder = require("lyrics-finder");

const spotifyApi = new SpotifyWebApi();

const getLyrics = async (req, res, next) => {
  const { artist, title } = req.query;

  const lyrics = (await lyricsFinder(artist, title)) || "Not found";

  res.json({ lyrics });
};

const addToSavedTrack = async (req, res, next) => {
  const { ids } = req.body;

  try {
    const data = await spotifyApi.addToMySavedTracks(ids);

    res.status(201).json({ message: "Track successfully added!", data });
  } catch ({ message }) {
    res.status(401).json({ message });
  }
};

const getSavedSongs = async (req, res, next) => {};

module.exports = { getLyrics, addToSavedTrack, getSavedSongs };
