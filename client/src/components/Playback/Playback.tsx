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
    <div className="fixed bottom-0 left-0 w-screen flex">
      {uri && (
        <SpotifyWebPlayer
          token={token}
          uris={uri ? uri : []}
          autoPlay={true}
          play={true}
          initialVolume={0.5}
          styles={{
            bgColor: "#282828",
            activeColor: "#57B65F",
            altColor: "#B3B3B3",
            color: "#FFFFFF",
            height: 65,
            loaderColor: "#57B65F",
            sliderColor: "#FFFFFF",
            sliderHandleBorderRadius: 100,
            sliderHandleColor: "#FFFFFF",
            sliderHeight: 5,
            sliderTrackBorderRadius: 100,
            sliderTrackColor: "#B3B3B3",
            trackArtistColor: "#B3B3B3",
            trackNameColor: "#FFFFFF",
          }}
        />
      )}
    </div>
  );
};
