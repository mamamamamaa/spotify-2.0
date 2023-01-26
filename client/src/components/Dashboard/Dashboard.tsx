import { FC, Suspense, useContext } from "react";
import { Searchbar } from "../Searchbar/Searchbar";
import { Playback } from "../Playback/Playback";
import { useCurrentTrack } from "../../hooks/useCurrentTrack";
import { useSpotify } from "../../hooks/useSpotify";
import { Outlet } from "react-router-dom";

interface Props {
  code: string;
}

export const Dashboard: FC<Props> = ({ code }) => {
  const accessToken = us;
  useSpotify(accessToken);

  const { currentTrack } = useCurrentTrack();

  return (
    <>
      <Searchbar />
      <div className="flex justify-between mt-10">
        {/*{searchResults.length > 0 && (*/}
        {/*  <SongsList list={searchResults} setCurrentTrack={setCurrentTrack} />*/}
        {/*)}*/}
        {/*{currentTrack && <Lyrics text={lyrics} />}*/}
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>

      {currentTrack && (
        <Playback token={accessToken} currentTrack={currentTrack} />
      )}
    </>
  );
};
