import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import { Playback } from "../Playback/Playback";
import { CurrentTrack } from "../../interfaces/intesfaces";
import { Navigation } from "../Navigation/Navigation";

import style from "./Layout.module.css";

interface Props {
  accessToken: string;
  currentTrack: CurrentTrack | undefined;
}

export const Layout: FC = () => {
  return (
    <div className={style.layoutContainer}>
      <div className={style.sidebar}>
        {/*TODO: add Logo home route and create home page*/}
        <Logo type="dash" />
        <Navigation />
      </div>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Playback />
    </div>
  );
};
