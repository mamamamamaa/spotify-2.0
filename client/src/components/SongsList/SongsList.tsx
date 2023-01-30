import { FC } from "react";
import { SongCard } from "../SongCard/SongCard";
import { Search } from "../../interfaces/intesfaces";
import style from "./SongList.module.css";
import { useAppDispatch, useSongs } from "../../redux/hooks";
import { setCurrentTrack } from "../../redux/songs";

interface Props {
  list: Search[];
  setCurrentTrack: Function;
}

export const SongsList: FC = () => {
  const { searchedTracks, isLoading } = useSongs();
  const dispatch = useAppDispatch();
  return (
    <>
      {searchedTracks.length > 0 && !isLoading && (
        <ul className={style.list}>
          {searchedTracks.map((song) => {
            const { id, name, artist, uri, hugeCover } = song;

            return (
              <li
                key={id}
                onClick={() =>
                  dispatch(
                    setCurrentTrack({ uri, artist, title: name, hugeCover })
                  )
                }
              >
                <SongCard song={song} songs={searchedTracks} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
