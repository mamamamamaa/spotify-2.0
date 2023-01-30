import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { login, refresh } from "./operations";
import { IAuthInitialState } from "../../interfaces/intesfaces";

const initialState: IAuthInitialState = {
  accessToken: "",
  refreshToken: "",
  expiresIn: 0,
  isLoading: false,
  error: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(login.fulfilled, (state, action) => {
        const { accessToken, refreshToken, expiresIn } = action.payload;
        state.accessToken = accessToken;
        state.refreshToken = refreshToken;
        state.expiresIn = expiresIn;
        state.isLoading = false;
      })
      .addCase(refresh.fulfilled, (state, action) => {
        const { accessToken, expiresIn } = action.payload;
        state.accessToken = accessToken;
        state.expiresIn = expiresIn;
        state.isLoading = false;
      })
      .addMatcher(isAnyOf(login.pending, refresh.pending), (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addMatcher(
        isAnyOf(login.rejected, refresh.rejected),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const authReducer = authSlice.reducer;
