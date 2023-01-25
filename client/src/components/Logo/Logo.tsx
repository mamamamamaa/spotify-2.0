import { FC } from "react";

// @ts-ignore
import style from "./Logo.module.css";
// @ts-ignore
import LogoIcon from "../../icons/Logo.svg";

export const Logo: FC = () => {
  return <img src={LogoIcon} alt="Spotify logo" className={style.log} />;
};
