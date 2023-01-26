import { BaseSyntheticEvent, FC, ReactNode } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Searchbar } from "../Searchbar/Searchbar";
import { SongsList } from "../SongsList/SongsList";
import { Playback } from "../Playback/Playback";
import { Lyrics } from "../Lyrics/Lyrics";
import { useCurrentTrack } from "../../hooks/useCurrentTrack";
import { useSpotify } from "../../hooks/useSpotify";
import { useSearchTrack } from "../../hooks/useSearchTrack";
import { Link, Outlet, Route, Routes } from "react-router-dom";

interface Props {
  code: string;
}

function Suspense(props: { fallback: null; children: ReactNode }) {
  return null;
}

export const Dashboard: FC<Props> = ({ code }) => {
  const { accessToken } = useAuth(code);

  useSpotify(accessToken);

  const { setSearch, searchResults } = useSearchTrack(accessToken);
  const [lyrics, currentTrack, setCurrentTrack] = useCurrentTrack();

  const handleSearch = (e: BaseSyntheticEvent) => setSearch(e.target.value);

  return (
    <>
      <Searchbar handler={handleSearch} />
      <div>
        <ul>
          <Link to="/">Tracks</Link>
          <Link to="/lyrics">Lyrics</Link>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            searchResults.length > 0 && (
              <SongsList
                list={searchResults}
                setCurrentTrack={setCurrentTrack}
              />
            )
          }
        />
        <Route
          path="/lyrics"
          element={currentTrack && <Lyrics text={lyrics} />}
        />
      </Routes>
      {currentTrack && (
        <Playback token={accessToken} currentTrack={currentTrack} />
      )}

      {/*<Searchbar handler={handleSearch} />*/}
      {/*<div className="flex justify-between mt-10">*/}
      {/*  {searchResults.length > 0 && (*/}
      {/*    <SongsList list={searchResults} setCurrentTrack={setCurrentTrack} />*/}
      {/*  )}*/}
      {/*  {currentTrack && <Lyrics text={lyrics} />}*/}
      {/*</div>*/}

      {/*{currentTrack && (*/}
      {/*  <Playback token={accessToken} currentTrack={currentTrack} />*/}
      {/*)}*/}
    </>
  );
};
