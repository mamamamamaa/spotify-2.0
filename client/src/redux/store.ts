import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth";
import { tracksReducer } from "./tracks";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tracks: tracksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
