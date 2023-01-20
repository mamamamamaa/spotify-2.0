import { FC } from "react";

interface Props {
  cover: string;
  name: string;
  artist: string;
  albumName: string;
}

export const SongCard: FC<Props> = ({ cover, name, artist, albumName }) => {
  return (
    <div className="flex items-center h-16 cursor-pointer hover:scale-99">
      <img src={cover} alt={albumName} className="h-16 w-16" />
      <div className="flex flex-col ml-3">
        <span className="text-white text-2xl">{name}</span>
        <span className="text-gray text-xl">{artist}</span>
      </div>
    </div>
  );
};
