import { BaseSyntheticEvent, FC, useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Searchbar } from "../Searchbar/Searchbar";
import { SongsList } from "../SongsList/SongsList";
import SpotifyWeApi from "spotify-web-api-node";
import { Search } from "../../interfaces/intesfaces";
import { Playback } from "../Playback/Playback";

interface Props {
  code: string;
}

const { REACT_APP_CLIENT_ID: clientId } = process.env;

const spotifyApi = new SpotifyWeApi({
  clientId,
});
const NO_COVER =
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ANo_cover.JPG&psig=AOvVaw17nPxRIKb5bGQlaEo68ZzB&ust=1674314482495000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJjpldG51vwCFQAAAAAdAAAAABAE";

export const Dashboard: FC<Props> = ({ code }) => {
  const { accessToken } = useAuth(code);

  const [search, setSearch] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Search[]>([]);
  const [currentTrack, setCurrentTrack] = useState<string>("");

  const handleSearch = (e: BaseSyntheticEvent) => setSearch(e.target.value);

  useEffect(() => {
    if (!accessToken) {
      return;
    }
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!searchResults || !search) {
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
        ({ id, name, uri, artists, album: { images, name: albumName } }) => {
          let cover = NO_COVER;

          if (images && images.length > 0 && images[0].height) {
            const sortedImages = [...images].sort(
              ({ height: a = 0 }, { height: b = 0 }) => a - b
            );

            cover = sortedImages[0].url;
          }

          return {
            id,
            name,
            uri,
            artist: artists[0].name,
            cover,
            albumName,
          };
        }
      );

      if (results) {
        setSearchResults(results);
      }
    };

    searchTracks();
  }, [search, accessToken]);

  return (
    <>
      <Searchbar handler={handleSearch} />
      <SongsList list={searchResults} setCurrentTrack={setCurrentTrack} />
      <Playback token={accessToken} uri={currentTrack} />
    </>
  );
};
