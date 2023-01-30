import { FC } from "react";
import { Lyrics } from "../components/Lyrics/Lyrics";
import { CurrentTrack } from "../interfaces/intesfaces";
import { useSongs } from "../redux/hooks";

interface Props {
  lyrics: string;
  trackInfo: CurrentTrack;
}

export const LyricsPage: FC = () => {
  const { currentTrack, lyrics } = useSongs();

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
