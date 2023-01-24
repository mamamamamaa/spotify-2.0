const express = require("express");
const { getLyrics } = require("../controllers/song");

const router = express.Router();

router.get("/lyrics", getLyrics);

module.exports = router;
