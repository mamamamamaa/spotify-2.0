import debounce from "lodash.debounce";
import { BaseSyntheticEvent, FC } from "react";
import { FiSearch } from "react-icons/fi";
import { useAppDispatch, useSongs } from "../../redux/hooks";
import { searchTracks } from "../../redux/tracks";
import style from "./Searchbar.module.css";

export const Searchbar: FC = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useSongs();
  const handleSearch = (e: BaseSyntheticEvent) =>
    !isLoading && dispatch(searchTracks(e.target.value));

  return (
    <form className={style.formWrapper}>
      <label className={style.labelWrapper}>
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
