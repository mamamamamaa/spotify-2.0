import { FC, useEffect, useState } from "react";
import { SongCard } from "../SongCard/SongCard";
import { Search } from "../../interfaces/intesfaces";
import style from "./SongList.module.css";
import { useSaveTrack } from "../../hooks/useSaveTrack";
import { spotifyApi } from "../../hooks";

interface Props {
  list: Search[];
  setCurrentTrack: Function;
}

export const SongsList: FC<Props> = ({ list, setCurrentTrack }) => {
  return (
    <>
      {list.length > 0 && (
        <ul className={style.list}>
          {list.map((song) => {
            const { id, name, artist, uri, hugeCover } = song;

            return (
              <li
                key={id}
                onClick={() =>
                  setCurrentTrack({ uri, artist, title: name, hugeCover })
                }
              >
                <SongCard song={song} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
