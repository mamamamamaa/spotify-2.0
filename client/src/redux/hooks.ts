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
  const search = useAppSelector((state) => state.songs.search);
  const savedTracks = useAppSelector((state) => state.songs.savedTracks);
  const searchedTracks = useAppSelector((state) => state.songs.searchedTracks);
  const currentTrack = useAppSelector((state) => state.songs.currentTrack);
  const lyrics = useAppSelector((state) => state.songs.lyrics);
  const error = useAppSelector((state) => state.songs.error);
  const isLoading = useAppSelector((state) => state.songs.isLoading);

  return {
    savedTracks,
    search,
    searchedTracks,
    currentTrack,
    lyrics,
    error,
    isLoading,
  };
};
