export interface Search {
  id: string;
  name: string;
  uri: string;
  artist: string;
  cover: string;
  hugeCover: string;
  albumName: string;
}

export interface CurrentTrack {
  uri: string;
  artist: string;
  title: string;
  hugeCover: string;
}

export interface IInitialState {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  isLoading: boolean;
  error: string | undefined;
}

export interface ILogin {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

export interface IRefresh {
  accessToken: string;
  expiresIn: number;
}
