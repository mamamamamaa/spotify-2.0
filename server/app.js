const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const bodyParser = require("body-parser");
const SpotifyWebApi = require("spotify-web-api-node");
require("dotenv").config();

const app = express();
const { PORT, CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } = process.env;

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(cors());
app.use(bodyParser.json());
app.use(logger(formatsLogger));

app.post("/refresh", (req, res) => {
  const { refreshToken } = req.body;

  const spotifyApi = new SpotifyWebApi({
    redirectUri: REDIRECT_URI,
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    refreshToken,
  });

  spotifyApi
    .refreshAccessToken()
    .then(({ body }) => {
      res
        .status(201)
        .json({ accessToken: body.accessToken, expiresIn: body.expiresIn });
    })
    .catch((error) => {
      res.status(400).json(error);
    });
});

app.post("/login", (req, res) => {
  const { code } = req.body;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: REDIRECT_URI,
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
  });

  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      res.status(200).json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch((err) => {
      res.sendStatus(400).json({ err });
    });
});

app.listen(PORT, () => console.log(`Server is running on the ${PORT} port`));
