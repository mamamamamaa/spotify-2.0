const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const SpotifyWebApi = require("spotify-web-api-node");
require("dotenv").config();

const app = express();
const { PORT, CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } = process.env;

app.use(cors());
app.use(bodyParser.json());

app.post("/login", (req, res) => {
  const { code } = req.body;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: REDIRECT_URI,
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
  });

  spotifyApi.authorizationCodeGrant(code).then((data) => {
    res.json({
      accessToken: data.body.access_token,
      refreshToken: data.body.refresh_token,
      expiresIn: data.body.expires_in,
    });
  });
});

app.listen(PORT, () => console.log(`Server is running on the ${PORT} port`));
