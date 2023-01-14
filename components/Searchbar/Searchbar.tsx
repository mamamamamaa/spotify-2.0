import { FC } from "react";
import { FaCompass } from "react-icons/fa";

export const Searchbar: FC = () => {
  return (
    <form className="relative w-full">
      <input
        type="text"
        className="w-full h-10 rounded-full top-0 left-0 pl-10"
      />
      <FaCompass className="w-[25px] h-[25px] text-gray-500 absolute top-2 left-2" />
      <ul className="flex gap-2 absolute top-[2px] right-2">
        <li className="text-white text-xl px-2 py-1 bg-gray-500 rounded-2xl">
          pop
        </li>
        <li className="text-white text-xl px-2 py-1 bg-gray-500 rounded-2xl">
          hip-hop
        </li>
        <li className="text-white text-xl px-2 py-1 bg-gray-500 rounded-2xl">
          rock
        </li>
      </ul>
    </form>
  );
};
