import { FC, useEffect } from "react";
import { SavedTrackList } from "../components/SavedTrackList/SavedTrackList";
import { getSavedTracks } from "../redux/tracks";
import { useAppDispatch } from "../redux/hooks";

export const SavedTracksPage: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getSavedTracks());
  }, []);

  return (
    <div className="w-full">
      <SavedTrackList />
    </div>
  );
};
