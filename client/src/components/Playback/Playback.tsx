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
  return (
    <div>
      <SpotifyWebPlayer
        token={token}
        uris={uri ? uri : []}
        autoPlay={true}
        initialVolume={0.5}
        styles={{}}
      />
    </div>
  );
};
