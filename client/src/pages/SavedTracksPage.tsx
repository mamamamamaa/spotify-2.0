import { FC } from "react";
import { SavedTrackList } from "../components/SavedTrackList/SavedTrackList";

export const SavedTracksPage: FC = () => {
  return (
    <div className="w-full">
      <SavedTrackList />
    </div>
  );
};
