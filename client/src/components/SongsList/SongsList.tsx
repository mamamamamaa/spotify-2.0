import { FC } from "react";
import { Search } from "../../interfaces/intesfaces";
import { SongCard } from "../SongCard/SongCard";
// @ts-ignore
import style from "./SongList.module.css";

interface Props {
  list: Search[];
}

export const SongsList: FC<Props> = ({ list }) => {
  return (
    <ul className={style.list}>
      {list.map(({ id, name, cover, albumName, artist }) => (
        <li key={id}>
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
