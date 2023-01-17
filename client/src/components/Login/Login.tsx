import { FC } from "react";

interface Props {
  link: string | undefined;
}

export const Login: FC<Props> = ({ link }) => {
  return (
    <div className="h-[200px] flex items-center justify-center">
      <a
        href={link}
        className="bg-green-600 px-3 py-2 text-white rounded-2xl shadow-xl hover:drop-shadow-xl cursor-pointer"
      >
        Login with Spotify
      </a>
    </div>
  );
};
