import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAuth = () => {
  const accessToken = useAppSelector((state) => state.auth.accessToken);
  const refreshToken = useAppSelector((state) => state.auth.refreshToken);
  const expiresIn = useAppSelector((state) => state.auth.expiresIn);
  const error = useAppSelector((state) => state.auth.error);
  const isLoading = useAppSelector((state) => state.auth.isLoading);

  return { accessToken, refreshToken, expiresIn, error, isLoading };
};

export const useSongs = () => {
  const savedTracks = useAppSelector((state) => state.tracks.savedTracks);
  const isSavedTracks = useAppSelector(
    (state) => state.tracks.searchSavedTracks
  );
  const searchedTracks = useAppSelector((state) => state.tracks.searchedTracks);
  const currentTrack = useAppSelector((state) => state.tracks.currentTrack);
  const lyrics = useAppSelector((state) => state.tracks.lyrics);
  const error = useAppSelector((state) => state.tracks.error);
  const isLoading = useAppSelector((state) => state.tracks.isLoading);

  return {
    isSavedTracks,
    savedTracks,
    searchedTracks,
    currentTrack,
    lyrics,
    error,
    isLoading,
  };
};
