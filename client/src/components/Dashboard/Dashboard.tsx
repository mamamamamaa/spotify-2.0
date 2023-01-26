import { FC } from "react";
import { Searchbar } from "../Searchbar/Searchbar";
import { Playback } from "../Playback/Playback";
import { SongsList } from "../SongsList/SongsList";
import { Lyrics } from "../Lyrics/Lyrics";
import {
  useAuth,
  useSearchTrack,
  useCurrentTrack,
  useSpotify,
} from "../../hooks";

import { Layout } from "../Layout/Layout";
import { Link, Route, Routes } from "react-router-dom";
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
      <nav className="flex flec-col">
        <Link to="/lyrics">To Lyrics</Link>
        <Link to="/">To Songs</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Layout />}>
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
        </Route>
        <Route path="/lyrics" element={<LyricsRoute lyrics={lyrics} />} />
      </Routes>

      <Playback token={accessToken} currentTrack={currentTrack} />
    </>
  );
};
