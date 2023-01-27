import { createContext, FC } from "react";
import { LoginPage } from "../Pages";
import { Navigate, Route, Routes } from "react-router-dom";
import { SearchPage } from "../Pages/SearchPage";
import { LyricsPage } from "../Pages/LyricsPage";
import { useAuth, useCurrentTrack, useSearchTrack, useSpotify } from "../hooks";
import { Layout } from "./Layout/Layout";

const code = new URLSearchParams(window.location.search).get("code") || "";
export const TokenContext = createContext("");

export const App: FC = () => {
  const accessToken = useAuth(code);
  useSpotify(accessToken);

  const { setSearch, searchResults } = useSearchTrack(accessToken);
  const { currentTrack, setCurrentTrack, lyrics } = useCurrentTrack();

  return (
    <TokenContext.Provider value={accessToken}>
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
              <SearchPage
                setSearch={setSearch}
                setCurrentTrack={setCurrentTrack}
                searchResults={searchResults}
              />
            }
          />
          <Route
            path="/lyrics"
            element={
              currentTrack && (
                <LyricsPage trackInfo={currentTrack} lyrics={lyrics} />
              )
            }
          />
        </Route>
      </Routes>
    </TokenContext.Provider>
  );
};
