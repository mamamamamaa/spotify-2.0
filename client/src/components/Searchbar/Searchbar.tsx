import { BaseSyntheticEvent, ChangeEventHandler, FC, useContext } from "react";
import { FiSearch } from "react-icons/fi";
import debounce from "lodash.debounce";
import { useSearchTrack } from "../../hooks/useSearchTrack";
import { Context } from "../App";

export const Searchbar: FC = () => {
  const token = useContext(Context);
  const { setSearch } = useSearchTrack(token);
  const handleSearch = (e: BaseSyntheticEvent) => setSearch(e.target.value);

  return (
    <form className="flex justify-center">
      <label className="relative">
        <FiSearch
          className="absolute top-3.5 left-2 text-gray hover:text-white ease-in-out duration-300 cursor-pointer"
          size={30}
        />
        <input
          type="text"
          onChange={debounce(handleSearch, 300)}
          placeholder="Search track/artist"
          className="bg-dark text-gray h-16 w-[1000px] rounded-xl pl-12 pr-3.5 focus:outline-0"
        />
      </label>
    </form>
  );
};
