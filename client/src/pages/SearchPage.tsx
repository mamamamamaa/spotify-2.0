import { FC } from "react";
import { Searchbar } from "../components/Searchbar/Searchbar";
import { SearchTrackList } from "../components/SearchTrackList/SearchTrackList";
import { Search } from "../interfaces/intesfaces";

interface Props {
  setSearch: Function;
  setCurrentTrack: Function;
  searchResults: Search[];
}

export const SearchPage: FC = () => {
  return (
    <div className="w-full">
      <Searchbar />
      <SearchTrackList />
    </div>
  );
};
