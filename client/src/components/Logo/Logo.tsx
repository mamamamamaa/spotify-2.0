import { FC } from "react";

import style from "./Logo.module.css";
import LogoIcon from "../../icons/Logo.svg";

interface Props {
  type: "login" | "dash";
}

export const Logo: FC<Props> = ({ type }) => {
  return (
    <img
      src={LogoIcon}
      alt="Spotify logo"
      className={type === "login" ? style.loginLogo : style.dashboardLogo}
    />
  );
};
