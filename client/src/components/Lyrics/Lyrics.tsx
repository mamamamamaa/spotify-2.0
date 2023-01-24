import { FC } from "react";

interface Props {
  text: string;
}

export const Lyrics: FC<Props> = ({ text }) => {
  return <p className="whitespace-pre mt-5 text-3xl">{text}</p>;
};
