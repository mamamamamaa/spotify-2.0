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
  const { searchedTracks, isLoading, isSavedTracks } = useSongs();
  const dispatch = useAppDispatch();
  return (
    <>
      {searchedTracks.length > 0 && !isLoading && (
        <ul className={style.list}>
          {searchedTracks.map((track, idx) => {
            const { id, name, artist, uri, hugeCover } = track;
            const isSaved = isSavedTracks[idx];
            return (
              <li
                key={id}
                onClick={() =>
                  dispatch(
                    setCurrentTrack({ uri, artist, title: name, hugeCover })
                  )
                }
              >
                <TrackCard track={track} isSaved={isSaved} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
