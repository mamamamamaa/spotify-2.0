const express = require("express");
const {
  getLyrics,
  addToSavedTrack,
  getSavedSongs,
} = require("../controllers/song");

const router = express.Router();

router.get("/lyrics", getLyrics);
router.post("/save", addToSavedTrack);
router.get("/save", getSavedSongs);

module.exports = router;
