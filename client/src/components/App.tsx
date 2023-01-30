import { createContext, FC } from "react";
import { LoginPage, LyricsPage, SearchPage, SavedTracksPage } from "../pages";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth, useCurrentTrack, useSearchTrack, useSpotify } from "../hooks";
import { Layout } from "./Layout/Layout";
import { useAppDispatch, useSongs } from "../redux/hooks";
import { login } from "../redux/auth";

const code = new URLSearchParams(window.location.search).get("code") || "";
export const TokenContext = createContext("");

export const App: FC = () => {
  // const accessToken = useAuth(code);
  // useSpotify(accessToken);
  const dispatch = useAppDispatch();
  const { currentTrack } = useSongs();

  // const { setSearch, searchResults } = useSearchTrack(accessToken);
  // const { currentTrack, setCurrentTrack, lyrics } = useCurrentTrack();
  if (code) {
    dispatch(login(code));
  }

  return (
    <Routes>
      <Route
        path="/login"
        element={!code ? <LoginPage /> : <Navigate to="/" />}
      />
      <Route path="/" element={code ? <Layout /> : <Navigate to="/login" />}>
        <Route index element={<SearchPage />} />
        <Route path="/lyrics" element={currentTrack && <LyricsPage />} />
        <Route path="/saved" element={<SavedTracksPage />} />
      </Route>
    </Routes>
  );
};
