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

export const useSongs = () => {};
