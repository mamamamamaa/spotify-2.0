import { FC } from "react";
import { Searchbar } from "../Searchbar/Searchbar";
import { SongsList } from "../SongsList/SongsList";
import { Search } from "../../interfaces/intesfaces";

interface Props {
  setSearch: Function;
  setCurrentTrack: Function;
  searchResults: Search[];
}

export const SearchRoute: FC<Props> = ({
  searchResults,
  setSearch,
  setCurrentTrack,
}) => {
  return (
    <div className="w-full">
      <Searchbar setSearch={setSearch} />
      <SongsList setCurrentTrack={setCurrentTrack} list={searchResults} />
    </div>
  );
};
