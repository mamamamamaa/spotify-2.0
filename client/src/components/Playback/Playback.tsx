import { FC } from "react";
import SpotifyWebPlayer from "react-spotify-web-playback";

interface Props {
  token: string;
  uri: string | string[];
}

export const Playback: FC<Props> = ({ token, uri }) => {
  return <SpotifyWebPlayer token={token} uris={uri} />;
};
