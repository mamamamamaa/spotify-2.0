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
        <FiSearch className={style.iconWrapper} size={30} />
        <input
          type="text"
          onChange={debounce(handleSearch, 300)}
          placeholder="Search track/artist"
          className={style.inputWrapper}
        />
      </label>
    </form>
  );
};
