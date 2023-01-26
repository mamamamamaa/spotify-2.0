import { FC } from "react";
import { SongCard } from "../SongCard/SongCard";
// @ts-ignore
import style from "./SongList.module.css";
import { Search } from "../../interfaces/intesfaces";

interface Props {
  list: Search[];
  setCurrentTrack: Function;
}

export const SongsList: FC<Props> = ({ list, setCurrentTrack }) => {
  return (
    <>
      {list.length > 0 && (
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
      )}
    </>
  );
};
