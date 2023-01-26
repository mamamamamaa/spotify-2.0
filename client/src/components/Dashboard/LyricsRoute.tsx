import { FC } from "react";
import { Lyrics } from "../Lyrics/Lyrics";

interface Props {
  lyrics: string;
}

export const LyricsRoute: FC<Props> = ({ lyrics }) => {
  return <Lyrics lyrics={lyrics} />;
};
