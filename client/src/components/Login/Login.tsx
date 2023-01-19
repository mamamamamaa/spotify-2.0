import { FC } from "react";

interface Props {
  link: string | undefined;
  title?: string;
}

export const Login: FC<Props> = ({ link, title = "Login with Spotify" }) => {
  return (
    <div className="h-[200px] flex items-center justify-center">
      <a
        href={link}
        className="bg-green px-3 py-2 text-white rounded-2xl shadow-xl hover:drop-shadow-xl cursor-pointer font-['Open_Sans']"
      >
        {title}
      </a>
    </div>
  );
};
