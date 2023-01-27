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
