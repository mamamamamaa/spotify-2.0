import { FC } from "react";
import style from "./Lyrics.module.css";

interface Props {
  lyrics: string;
}

export const Lyrics: FC<Props> = ({ lyrics }) => {
  return <>{lyrics && <p className={style.lyricsContainer}>{lyrics}</p>}</>;
};
