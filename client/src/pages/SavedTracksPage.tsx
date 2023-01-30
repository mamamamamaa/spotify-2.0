import { FC, useEffect } from "react";
import { useAppDispatch, useSongs } from "../redux/hooks";
import { getSavedTracks } from "../redux/tracks";

export const SavedTracksPage: FC = () => {
  const dispatch = useAppDispatch();
  const { savedTracks } = useSongs();

  useEffect(() => {
    dispatch(getSavedTracks());
  }, []);

  return <div>{savedTracks && <ul>savedTra</ul>}</div>;
};
