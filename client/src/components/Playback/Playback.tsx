import { FC } from "react";
import SpotifyWebPlayer from "react-spotify-web-playback";

interface Props {
  token: string;
  uri: string;
}

export const Playback: FC<Props> = ({ token, uri }) => {
  if (!token) {
    return null;
  }
  return <SpotifyWebPlayer token={token} uris={uri ? uri : []} />;
};
