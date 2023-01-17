const express = require("express");
const SpotifyWebApi = require("spotify-web-api-node");
require("dotenv").config();

const app = express();
const { PORT, CLIENT_ID, CLIENT_SECRET, REDIRECT_LINK } = process.env;

app.post("/login", (req, res) => {
  const { code } = req.body;
  const spotifyApi = new SpotifyWebApi({});
});

app.listen(PORT, () => console.log(`Server is running on the ${PORT} port`));
