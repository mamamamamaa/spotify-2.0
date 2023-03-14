const lyricsFinder = require("lyrics-finder");

const getLyrics = async (req, res) => {
  const { artist, title } = req.query;

  const lyrics = (await lyricsFinder(artist, title)) || "Not found";

  res.json({ lyrics });
};

module.exports = { getLyrics };
