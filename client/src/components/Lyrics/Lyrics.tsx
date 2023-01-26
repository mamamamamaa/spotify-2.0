import { FC } from "react";
// @ts-ignore
import style from "./Lyrics.module.css";
import { useCurrentTrack } from "../../hooks/useCurrentTrack";

export const Lyrics: FC = () => {
  const { lyrics } = useCurrentTrack();
  return <p className={style.lyricsContainer}>{lyrics}</p>;
};
