import { FC, useEffect } from "react";
import { LoginPage, LyricsPage, SearchPage, SavedTracksPage } from "../pages";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { useAppDispatch, useAuth, useSongs } from "../redux/hooks";
import { login } from "../redux/auth";

const code = new URLSearchParams(window.location.search).get("code") || "";

export const App: FC = () => {
  const dispatch = useAppDispatch();
  const { currentTrack } = useSongs();
  const { accessToken } = useAuth();

  useEffect(() => {
    if (code && !accessToken) {
      dispatch(login(code));
    }
  }, [code]);

  return (
    <Routes>
      <Route
        path="/login"
        element={!accessToken ? <LoginPage /> : <Navigate to="/" />}
      />
      <Route
        path="/"
        element={accessToken ? <Layout /> : <Navigate to="/login" />}
      >
        <Route index element={<SearchPage />} />
        <Route path="/lyrics" element={currentTrack && <LyricsPage />} />
        <Route path="/saved" element={<SavedTracksPage />} />
      </Route>
    </Routes>
  );
};
