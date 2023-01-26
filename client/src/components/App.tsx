import { FC } from "react";
import { DashboardPage, LoginPage } from "../Pages";
import { Navigate, Route, Routes } from "react-router-dom";
import { SearchRoute } from "./Dashboard/SearchRoute";
import { LyricsRoute } from "./Dashboard/LyricsRoute";
import { useAuth, useCurrentTrack, useSearchTrack, useSpotify } from "../hooks";
import { Layout } from "./Layout/Layout";

const code = new URLSearchParams(window.location.search).get("code") || "";

export const App: FC = () => {
  const accessToken = useAuth(code);
  useSpotify(accessToken);

  const { setSearch, searchResults } = useSearchTrack(accessToken);
  const { currentTrack, setCurrentTrack, lyrics } = useCurrentTrack();

  return (
    <Routes>
      <Route
        path="/login"
        element={!code ? <LoginPage /> : <Navigate to="/" />}
      />
      <Route
        path="/"
        element={
          code ? (
            <Layout currentTrack={currentTrack} accessToken={accessToken} />
          ) : (
            <Navigate to="/login" />
          )
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
        <Route path="lyrics" element={<LyricsRoute lyrics={lyrics} />} />
      </Route>
      {/*{code ? <DashboardPage code={code} /> : <LoginPage />}*/}
    </Routes>
  );
};
