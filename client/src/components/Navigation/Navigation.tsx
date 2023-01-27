import { FC } from "react";
import { NavLink } from "react-router-dom";
import { FiHeart, FiSearch } from "react-icons/fi";
import { TbMicrophone2 } from "react-icons/tb";
import style from "./Navigation.module.css";

export const Navigation: FC = () => {
  return (
    <nav className={style.linkList}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? style.focus : undefined)}
      >
        <FiSearch size={25} className={style.linkIcon} />
      </NavLink>
      <NavLink
        to="/lyrics"
        className={({ isActive }) => (isActive ? style.focus : undefined)}
      >
        <TbMicrophone2 size={25} className={style.linkIcon} />
      </NavLink>
      <NavLink
        to="/saved"
        className={({ isActive }) => (isActive ? style.focus : undefined)}
      >
        <FiHeart size={25} className={style.linkIcon} />
      </NavLink>
    </nav>
  );
};
