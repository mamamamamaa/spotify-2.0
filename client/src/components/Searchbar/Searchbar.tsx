import { BaseSyntheticEvent, FC } from "react";
import { FiSearch } from "react-icons/fi";
import debounce from "lodash.debounce";
import { useAppDispatch } from "../../redux/hooks";
import { searchTracks } from "../../redux/songs";

interface Props {
  setSearch: Function;
}

export const Searchbar: FC = () => {
  const dispatch = useAppDispatch();
  const handleSearch = (e: BaseSyntheticEvent) =>
    dispatch(searchTracks(e.target.value));

  return (
    <form className="flex justify-center w-full">
      <label className="relative w-full">
        <FiSearch
          className="absolute top-2.5 left-2 text-gray hover:text-white ease-in-out duration-300 cursor-pointer"
          size={30}
        />
        <input
          type="text"
          onChange={debounce(handleSearch, 300)}
          placeholder="Search track/artist"
          className="bg-dark text-gray h-12 w-full rounded-xl pl-12 pr-3.5 focus:outline-0"
        />
      </label>
    </form>
  );
};
