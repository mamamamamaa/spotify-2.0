import { BaseSyntheticEvent, FC, useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Searchbar } from "../Searchbar/Searchbar";
import { SongsList } from "../SongsList/SongsList";
import SpotifyWeApi from "spotify-web-api-node";

interface Props {
  code: string;
}

const { REACT_APP_CLIENT_ID: clientId } = process.env;

const spotifyApi = new SpotifyWeApi({
  clientId,
});

export const Dashboard: FC<Props> = ({ code }) => {
  const { accessToken } = useAuth(code);
  console.log(accessToken);
  const songs = [{ id: 12, name: "Lala" }];
  const [search, setSearch] = useState<string>("");
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = (e: BaseSyntheticEvent) => setSearch(e.target.value);

  useEffect(() => {
    if (!accessToken) {
      return;
    }
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!searchResults) {
      return setSearchResults([]);
    }

    if (!accessToken || !search) {
      return;
    }

    const searchTracks = async () => {
      const {
        body: { tracks },
      } = await spotifyApi.searchTracks(search);

      const results = tracks?.items.map(
        ({ id, name, uri, artists, album: { images } }) => {
          if (images.length > 0) {
            const cover = images.reduce(
              (acc = 0, { height = 0 }) => (acc > height ? height : acc),
              images[0].height
            );
          }

          return { id, name, uri, artist: artists[0] };
        }
      );
    };

    searchTracks();
  }, [search, accessToken]);

  return (
    <>
      <Searchbar handler={handleSearch} />
      <SongsList list={songs} />
    </>
  );
};
