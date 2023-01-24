import { FC } from "react";

// @ts-ignore
import LogoIcon from "../../icons/Logo.svg";

export const Logo: FC = () => {
  return <img src={LogoIcon} alt="Spotify logo" className="mx-auto my-5" />;
};
