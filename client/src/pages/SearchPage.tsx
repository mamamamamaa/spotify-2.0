import { FC } from "react";
import { Searchbar } from "../components/Searchbar/Searchbar";
import { SearchTrackList } from "../components/SearchTrackList/SearchTrackList";

export const SearchPage: FC = () => {
  return (
    <div className="w-full">
      <Searchbar />
      <SearchTrackList />
    </div>
  );
};
