import { FC, Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Logo } from "../Logo/Logo";

import { FiSearch, FiHeart } from "react-icons/fi";
import { TbMicrophone2 } from "react-icons/tb";

import style from "./Layout.module.css";
import { Playback } from "../Playback/Playback";
import { CurrentTrack } from "../../interfaces/intesfaces";

interface Props {
  accessToken: string;
  currentTrack: CurrentTrack | undefined;
}

export const Layout: FC<Props> = ({ currentTrack, accessToken }) => {
  return (
    <div className={style.layoutContainer}>
      <div className={style.sidebar}>
        {/*TODO: add Logo home route and create home page*/}
        <Logo type="dash" />
        <nav className={style.linkList}>
          <NavLink to="/">
            <FiSearch size={25} className={style.linkIcon} />
          </NavLink>
          <NavLink to="/lyrics">
            <TbMicrophone2 size={25} className={style.linkIcon} />
          </NavLink>
          <NavLink to="/likes">
            <FiHeart size={25} className={style.linkIcon} />
          </NavLink>
        </nav>
      </div>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Playback token={accessToken} currentTrack={currentTrack} />
    </div>
  );
};
