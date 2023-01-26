import { FC } from "react";
import LogoIcon from "../../icons/Logo.svg";
import style from "./Logo.module.css";

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
