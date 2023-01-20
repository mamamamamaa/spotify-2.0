import { FC } from "react";
import { Search } from "../../interfaces/intesfaces";
import { SongCard } from "../SongCard/SongCard";

interface Props {
  list: Search[];
}

export const SongsList: FC<Props> = ({ list }) => {
  return (
    <ul className="flex flex-col gap-4 mt-5 h-[65vh] overflow-y-scroll">
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
