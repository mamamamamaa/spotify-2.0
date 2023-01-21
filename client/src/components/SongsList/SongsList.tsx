import { FC } from "react";
import { Search } from "../../interfaces/intesfaces";
import { SongCard } from "../SongCard/SongCard";
// @ts-ignore
import style from "./SongList.module.css";

interface Props {
  list: Search[];
  setCurrentTrack: Function;
}

export const SongsList: FC<Props> = ({ list, setCurrentTrack }) => {
  return (
    <ul className={style.list}>
      {list.map(({ id, name, cover, albumName, artist, uri }) => (
        <li key={id} onClick={() => setCurrentTrack(uri)}>
          <SongCard
            cover={cover}
            name={name}
            artist={artist}
            albumName={albumName}
          />
        </li>
      ))}
    </ul>
  );
};
