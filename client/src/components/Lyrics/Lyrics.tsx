import { FC } from "react";
// @ts-ignore
import style from "./Lyrics.module.css";

interface Props {
  text: string;
}

export const Lyrics: FC<Props> = ({ text }) => {
  return <p className={style.lyricsContainer}>{text}</p>;
};
