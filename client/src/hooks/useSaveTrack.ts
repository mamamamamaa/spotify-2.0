import { useEffect, useState } from "react";
import { spotifyApi } from "./useSpotify";
import { Search } from "../interfaces/intesfaces";

export const useSaveTrack = () => {
  const [savedTracks, setSavedTracks] = useState();
  const [song, setSong] = useState<Search>();

  useEffect(() => {
    if (!song) {
      return;
    }
    const addTrackToSaved = async () => {
      try {
        await spotifyApi.addToMySavedTracks([song.id]);
      } catch (e) {
        if (e instanceof Error) {
          throw Error(e.message);
        }
      }
    };

    addTrackToSaved();
  }, [song]);

  useEffect(() => {}, []);

  return { setSong, savedTracks };
};
