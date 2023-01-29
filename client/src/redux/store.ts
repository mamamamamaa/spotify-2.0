import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth";
import { songsReducer } from "./songs/songsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    songs: songsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
