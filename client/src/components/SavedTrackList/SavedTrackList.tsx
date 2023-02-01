import { FC } from "react";
import { TrackCard } from "../TrackCard/TrackCard";
import { useSongs } from "../../redux/hooks";
import style from "./SavedTrackList.module.css";

export const SavedTrackList: FC = () => {
  const { savedTracks } = useSongs();

  return (
    <>
      {savedTracks.length > 0 && (
        <ul className={style.list}>
          {savedTracks.map((track) => (
            <li key={track.id}>
              <TrackCard track={track} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
