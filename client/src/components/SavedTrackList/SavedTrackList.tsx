import { FC, useEffect } from "react";
import { getSavedTracks, setCurrentTrack } from "../../redux/tracks";
import { TrackCard } from "../TrackCard/TrackCard";
import { useAppDispatch, useSongs } from "../../redux/hooks";

import style from "./SavedTrackList.module.css";

export const SavedTrackList: FC = () => {
  const dispatch = useAppDispatch();
  const { savedTracks, isLoading } = useSongs();

  useEffect(() => {
    dispatch(getSavedTracks());
  }, []);
  return (
    <>
      {savedTracks.length > 0 && !isLoading && (
        <ul className={style.list}>
          {savedTracks.map((track, idx) => {
            const { id, name, artist, uri, hugeCover } = track;
            return (
              <li
                key={id}
                onClick={() =>
                  dispatch(
                    setCurrentTrack({ uri, artist, title: name, hugeCover })
                  )
                }
              >
                <TrackCard track={track} likes={true} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
