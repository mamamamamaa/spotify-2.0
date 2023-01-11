import { FC } from "react";
import { IconType } from "react-icons";
import { AiFillHome, AiFillClockCircle } from "react-icons/ai";
import { FaCompass, FaMicrophone } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

const icons: IconType[] = [
  AiFillHome,
  FaCompass,
  FaMicrophone,
  AiFillClockCircle,
  BsThreeDots,
];

export const Navbar: FC = () => {
  return (
    <>
      <ul className="flex flex-col gap-5">
        {icons.map((el, idx) => {
          const Icon = icons[idx];

          return (
            <li key={idx}>
              <Icon className="fill-white w-[25px] h-[25px] hover:fill-green-600 " />
            </li>
          );
        })}
      </ul>
    </>
  );
};
