const SpotifyWebApi = require("spotify-web-api-node");

const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } = process.env;

const refresh = async (req, res, next) => {
  const { refreshToken } = req.body;

  const spotifyApi = new SpotifyWebApi({
    redirectUri: REDIRECT_URI,
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    refreshToken,
  });
  try {
    const { body } = await spotifyApi.refreshAccessToken();
    res
      .status(200)
      .json({ accessToken: body.accessToken, expiresIn: body.expiresIn });
  } catch (error) {
    res.status(401).json({ error });
  }
  // spotifyApi
  //   .refreshAccessToken()
  //   .then(({ body }) => {
  //     res
  //       .status(201)
  //       .json({ accessToken: body.accessToken, expiresIn: body.expiresIn });
  //   })
  //   .catch((error) => {
  //     res.status(400).json(error);
  //   });
};

const login = async (req, res, next) => {
  const { code } = req.body;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: REDIRECT_URI,
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
  });

  try {
    const { body } = await spotifyApi.authorizationCodeGrant(code);
    res.status(200).json({
      accessToken: body.access_token,
      refreshToken: body.refresh_token,
      expiresIn: body.expires_in,
    });
  } catch (error) {
    res.status(401).json({ error });
  }

  // spotifyApi
  //   .authorizationCodeGrant(code)
  //   .then((data) => {
  //     res.status(200).json({
  //       accessToken: data.body.access_token,
  //       refreshToken: data.body.refresh_token,
  //       expiresIn: data.body.expires_in,
  //     });
  //   })
  //   .catch((err) => {
  //     res.status(401).json({ error });
  //   });
};

module.exports = { login, refresh };
