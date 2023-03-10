import { FC, useEffect } from "react";
import { Lyrics } from "../components/Lyrics/Lyrics";
import { useAppDispatch, useSongs } from "../redux/hooks";
import { getLyrics } from "../redux/tracks";

export const LyricsPage: FC = () => {
  const { currentTrack, lyrics } = useSongs();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (currentTrack) {
      dispatch(
        getLyrics({ artist: currentTrack.artist, title: currentTrack.title })
      );
    }
  }, [currentTrack, dispatch]);

  return (
    <>
      {currentTrack ? (
        <div className="flex gap-10">
          <div>
            <img src={currentTrack.hugeCover} alt="Album cover" />
            <h1 className="text-3xl">{currentTrack.title}</h1>
            <h2 className="text-2xl text-gray">{currentTrack.artist}</h2>
          </div>
          <Lyrics lyrics={lyrics} />
        </div>
      ) : (
        <div>No current track</div>
      )}
    </>
  );
};
