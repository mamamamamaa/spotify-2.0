import { FC, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Search } from "../../interfaces/intesfaces";
import { useAppDispatch } from "../../redux/hooks";
import style from "./TrackCard.module.css";
import {
  removeTrackFromSaved,
  saveTrack,
  setCurrentTrack,
} from "../../redux/tracks";

interface Props {
  track: Search;
  isSaved?: boolean;
}

export const TrackCard: FC<Props> = ({ track, isSaved }) => {
  const [shouldRemove, setShouldRemove] = useState<boolean>(isSaved ?? true);
  const dispatch = useAppDispatch();
  const { uri, hugeCover, cover, name, artist, albumName, id } = track;

  const handleSaveOrRemoveTrack = () => {
    if (shouldRemove) {
      dispatch(removeTrackFromSaved([id]));
    } else {
      dispatch(saveTrack(track));
    }
    setShouldRemove((prevState) => !prevState);
  };

  return (
    <div className={style.cardWrapper}>
      <div
        className={style.trackInfoWrapper}
        onClick={() =>
          dispatch(setCurrentTrack({ uri, artist, title: name, hugeCover }))
        }
      >
        <img src={cover} alt={albumName} className={style.cover} />
        <div className={style.trackInfo}>
          <span className={style.title}>{name}</span>
          <span className={style.artist}>{artist}</span>
        </div>
      </div>
      <button onClick={handleSaveOrRemoveTrack}>
        <FaHeart size={25} color={shouldRemove ? "#57B65F" : "#FFFFFF"} />
      </button>
    </div>
  );
};
