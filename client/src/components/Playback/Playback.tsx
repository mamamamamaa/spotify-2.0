import { FC } from "react";
import SpotifyWebPlayer from "react-spotify-web-playback";
import { useAuth, useSongs } from "../../redux/hooks";

export const Playback: FC = () => {
  const { accessToken } = useAuth();
  const { currentTrack } = useSongs();

  return (
    <>
      {currentTrack && (
        <div className="fixed bottom-0 left-0 w-screen flex">
          <SpotifyWebPlayer
            token={accessToken}
            uris={currentTrack?.uri}
            autoPlay={true}
            play={true}
            initialVolume={0.5}
            persistDeviceSelection={true}
            showSaveIcon={true}
            magnifySliderOnHover={true}
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
        </div>
      )}
    </>
  );
};
