import { FC, useContext } from "react";
import { Context } from "../App";
import { SongCard } from "../SongCard/SongCard";
import { useSearchTrack } from "../../hooks/useSearchTrack";
import { useCurrentTrack } from "../../hooks/useCurrentTrack";
// @ts-ignore
import style from "./SongList.module.css";

export const SongsList: FC = () => {
  const token = useContext(Context);
  const { searchResults: list } = useSearchTrack(token);
  const { setCurrentTrack } = useCurrentTrack();

  return (
    <ul className={style.list}>
      {list.map(({ id, name, cover, albumName, artist, uri }) => (
        <li
          key={id}
          onClick={() => setCurrentTrack({ uri, artist, title: name })}
        >
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
