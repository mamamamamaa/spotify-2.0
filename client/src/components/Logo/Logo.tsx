import { FC } from "react";
// @ts-ignore
import LogoIcon from "../../icons/Logo.svg";

// @ts-ignore
import style from "./Logo.module.css";

export const Logo: FC = () => {
  return <img src={LogoIcon} alt="Spotify logo" className={style.logo} />;
};
