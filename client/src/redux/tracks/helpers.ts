const NO_COVER =
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ANo_cover.JPG&psig=AOvVaw17nPxRIKb5bGQlaEo68ZzB&ust=1674314482495000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJjpldG51vwCFQAAAAAdAAAAABAE";

export const mapSearchedTracks = (
  tracks: SpotifyApi.PagingObject<SpotifyApi.TrackObjectFull>
) => {
  return tracks.items.map(
    ({ id, name, uri, artists, album: { images, name: albumName } }) => {
      let cover = NO_COVER;
      let hugeCover = NO_COVER;

      if (images && images.length > 0 && images[0].height) {
        const sortedImages = [...images].sort(
          ({ height: a = 0 }, { height: b = 0 }) => a - b
        );

        cover = sortedImages[0].url;
        hugeCover = sortedImages[sortedImages.length - 1].url;
      }

      return {
        id,
        name,
        uri,
        artist: artists[0].name,
        cover,
        hugeCover,
        albumName,
      };
    }
  );
};

export const mapSavedTracks = (tracks: SpotifyApi.SavedTrackObject[]) => {
  return tracks.map(
    ({
      track: {
        id,
        name,
        uri,
        artists,
        album: { images, name: albumName },
      },
    }) => {
      let cover = NO_COVER;
      let hugeCover = NO_COVER;

      if (images && images.length > 0 && images[0].height) {
        const sortedImages = [...images].sort(
          ({ height: a = 0 }, { height: b = 0 }) => a - b
        );

        cover = sortedImages[0].url;
        hugeCover = sortedImages[sortedImages.length - 1].url;
      }

      return {
        id,
        name,
        uri,
        artist: artists[0].name,
        cover,
        hugeCover,
        albumName,
      };
    }
  );
};
