import { FC } from "react";
import { Searchbar } from "../components/Searchbar/Searchbar";
import { SongsList } from "../components/SongsList/SongsList";
import { Search } from "../interfaces/intesfaces";

interface Props {
  setSearch: Function;
  setCurrentTrack: Function;
  searchResults: Search[];
}

export const SearchPage: FC<Props> = ({
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
