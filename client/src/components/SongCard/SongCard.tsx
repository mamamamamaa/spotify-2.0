import { FC, useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useSaveTrack } from "../../hooks/useSaveTrack";
import { Search } from "../../interfaces/intesfaces";
import { spotifyApi } from "../../hooks";

interface Props {
  song: Search;
}

export const SongCard: FC<Props> = ({ song }) => {
  const { setSong } = useSaveTrack();
  const [saved, setSaved] = useState<boolean>(false);
  const { cover, name, artist, albumName, id } = song;

  const handleSaveTrack = () => {
    setSong(song);
    setSaved((prevState) => !prevState);
  };

  useEffect(() => {
    const isSaved = async () => {
      try {
        const { body } = await spotifyApi.containsMySavedTracks([id]);

        setSaved(body[0]);
      } catch (e) {
        if (e instanceof Error) {
          throw Error(e.message);
        }
      }
    };

    isSaved();
  }, []);

  return (
    <div className="flex items-center h-16 justify-between pl-3 pr-5">
      <div className="flex items-center cursor-pointer hover:scale-99">
        <img src={cover} alt={albumName} className="h-16 w-16" />
        <div className="flex flex-col ml-3">
          <span className="text-white text-2xl">{name}</span>
          <span className="text-gray text-xl">{artist}</span>
        </div>
      </div>
      <button onClick={handleSaveTrack}>
        <FaHeart size={25} color={saved ? "#57B65F" : "#FFFFFF"} />
      </button>
    </div>
  );
};
