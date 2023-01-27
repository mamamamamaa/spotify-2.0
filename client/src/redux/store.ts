import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { songsReducer } from "./songs/songsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    songs: songsReducer,
  },
});
