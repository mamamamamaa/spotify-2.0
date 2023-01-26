import { FC } from "react";
import {
  useAuth,
  useSearchTrack,
  useCurrentTrack,
  useSpotify,
} from "../../hooks";

import { Layout } from "../Layout/Layout";
import { Route, Routes } from "react-router-dom";
import { SearchRoute } from "./SearchRoute";
import { LyricsRoute } from "./LyricsRoute";

interface Props {
  code: string;
}

export const Dashboard: FC<Props> = ({ code }) => {
  const accessToken = useAuth(code);
  useSpotify(accessToken);

  const { setSearch, searchResults } = useSearchTrack(accessToken);
  const { currentTrack, setCurrentTrack, lyrics } = useCurrentTrack();

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout currentTrack={currentTrack} accessToken={accessToken} />
          }
        >
          <Route
            index
            element={
              <SearchRoute
                setSearch={setSearch}
                setCurrentTrack={setCurrentTrack}
                searchResults={searchResults}
              />
            }
          />
          <Route path="/lyrics" element={<LyricsRoute lyrics={lyrics} />} />
        </Route>
      </Routes>

      {/*<Playback token={accessToken} currentTrack={currentTrack} />*/}
    </>
  );
};
