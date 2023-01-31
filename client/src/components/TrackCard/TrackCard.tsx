import { FC } from "react";
import { FaHeart } from "react-icons/fa";
import { Search } from "../../interfaces/intesfaces";
import { useAppDispatch } from "../../redux/hooks";
import { saveTrack } from "../../redux/tracks";

interface Props {
  track: Search;
  isSaved?: boolean;
  likes?: boolean;
}

export const TrackCard: FC<Props> = ({ track, isSaved, likes }) => {
  const dispatch = useAppDispatch();
  const { cover, name, artist, albumName } = track;

  const handleSaveTrack = () => dispatch(saveTrack(track));

  const color = likes ? "#57B65F" : isSaved ? "#57B65F" : "#FFFFFF";

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
        <FaHeart size={25} color={color} />
      </button>
    </div>
  );
};
