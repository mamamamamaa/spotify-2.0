import { useEffect, useState } from "react";
import { CurrentTrack } from "../interfaces/intesfaces";
import axios from "axios";

export const useCurrentTrack = (): [
  string,
  CurrentTrack | undefined,
  Function
] => {
  const [currentTrack, setCurrentTrack] = useState<CurrentTrack>();
  const [lyrics, setLyrics] = useState<string>("");
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

  return [lyrics, currentTrack, setCurrentTrack];
};
