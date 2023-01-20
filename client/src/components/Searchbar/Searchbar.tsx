import { ChangeEventHandler, FC } from "react";
import { FiSearch } from "react-icons/fi";
import debounce from "lodash.debounce";

interface Props {
  handler: ChangeEventHandler;
}

export const Searchbar: FC<Props> = ({ handler }) => {
  return (
    <form className="flex justify-center">
      <label className="relative">
        <FiSearch
          className="absolute top-3.5 left-2 text-gray hover:text-white ease-in-out duration-300 cursor-pointer"
          size={30}
        />
        <input
          type="text"
          onChange={debounce(handler, 500)}
          placeholder="Search track/artist"
          className="bg-dark text-gray h-16 w-[1000px] rounded-xl pl-12 pr-3.5 focus:outline-0"
        />
      </label>
    </form>
  );
};
