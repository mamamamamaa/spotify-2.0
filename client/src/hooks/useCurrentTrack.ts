import React, { useEffect, useState } from "react";
import { CurrentTrack } from "../interfaces/intesfaces";
import axios from "axios";

export const useCurrentTrack = (
  setLyrics: React.Dispatch<React.SetStateAction<string>>
): [CurrentTrack | undefined, Function] => {
  const [currentTrack, setCurrentTrack] = useState<CurrentTrack>();

  useEffect(() => {
    if (!currentTrack) {
      return;
    }
    const getLyrics = async () => {
      const { title, artist } = currentTrack;
      try {
        const {
          data: { lyrics },
        } = await axios.get("http://localhost:3001/songs/lyrics", {
          params: {
            artist,
            title,
          },
        });

        setLyrics(lyrics);
      } catch (e) {
        if (e instanceof Error) {
          throw Error(e.message);
        }
      }
    };

    getLyrics();
  }, [currentTrack]);

  return [currentTrack, setCurrentTrack];
};
