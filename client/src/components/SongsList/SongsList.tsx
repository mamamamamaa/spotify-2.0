import { FC } from "react";

interface Props {
  list: { id: number; name: string }[];
}

export const SongsList: FC<Props> = ({ list }) => {
  return (
    <ul>
      {list.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
};
