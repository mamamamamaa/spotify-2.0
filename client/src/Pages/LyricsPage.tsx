import { FC } from "react";
import { Lyrics } from "../components/Lyrics/Lyrics";
import { CurrentTrack } from "../interfaces/intesfaces";

interface Props {
  lyrics: string;
  trackInfo: CurrentTrack;
}

export const LyricsPage: FC<Props> = ({ trackInfo, lyrics }) => {
  const { hugeCover, title, artist } = trackInfo;

  return (
    <div className="flex gap-10">
      <div>
        <img src={hugeCover} alt="Album cover" />
        <h1 className="text-3xl">{title}</h1>
        <h2 className="text-2xl text-gray">{artist}</h2>
      </div>
      <Lyrics lyrics={lyrics} />
    </div>
  );
};
