import { FC } from "react";

import style from "./Login.module.css";

interface Props {
  link: string | undefined;
  title?: string;
}

export const Login: FC<Props> = ({ link, title = "Login with Spotify" }) => {
  return (
    <div className={style.wrapper}>
      <a href={link} className={style.loginLink}>
        {title}
      </a>
    </div>
  );
};
