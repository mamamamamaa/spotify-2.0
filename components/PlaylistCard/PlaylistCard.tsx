import { FC } from "react";
import { AiFillPlayCircle } from "react-icons/ai";

export const PlaylistCard: FC = () => {
  const numberOfTracks = 12;
  const nameOfPlaylist = "Daily Mix";
  const musicians = ["Coldplay", "PK", "Alk"];

  const listOfMusicians = musicians
    .filter((el, idx) => (idx < 2 ? el : idx === 2 ? "..." : false))
    .join(", ");

  return (
    <div className="text-white w-[300px] h-[450px] bg-white">
      <span>{numberOfTracks} of tracks</span>
      <div className="flex gap 5px justify-center">
        <button type="button">
          <AiFillPlayCircle className="text-green-600" size={10} />
        </button>
        <div>
          <h3>{nameOfPlaylist}</h3>
          <p>{listOfMusicians}</p>
        </div>
      </div>
    </div>
  );
};
