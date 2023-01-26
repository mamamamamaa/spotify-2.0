import { useEffect, useState } from "react";
import { Search } from "../interfaces/intesfaces";
import { spotifyApi } from "./useSpotify";

const NO_COVER =
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ANo_cover.JPG&psig=AOvVaw17nPxRIKb5bGQlaEo68ZzB&ust=1674314482495000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJjpldG51vwCFQAAAAAdAAAAABAE";

export const useSearchTrack = (token: string | undefined) => {
  const [search, setSearch] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Search[]>([]);

  useEffect(() => {
    if (!searchResults || !search) {
      return setSearchResults([]);
    }

    if (!token || !search) {
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
  }, [search, token]);

  return { search, setSearch, searchResults, setSearchResults };
};
