import { FC } from "react";
import { TrackCard } from "../TrackCard/TrackCard";
import { Search } from "../../interfaces/intesfaces";
import style from "./SearchTrackList.module.css";
import { useAppDispatch, useSongs } from "../../redux/hooks";
import { setCurrentTrack } from "../../redux/tracks";

interface Props {
  list: Search[];
  setCurrentTrack: Function;
}

export const SearchTrackList: FC = () => {
  const { searchedTracks, isSavedTracks } = useSongs();
  return (
    <>
      {searchedTracks.length > 0 && (
        <ul className={style.list}>
          {searchedTracks.map((track, idx) => {
            const isSaved = isSavedTracks[idx];
            return (
              <li key={track.id}>
                <TrackCard track={track} isSaved={isSaved} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
