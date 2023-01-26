import { FC } from "react";
import { Searchbar } from "../Searchbar/Searchbar";
import { Playback } from "../Playback/Playback";
import { useSpotify } from "../../hooks/useSpotify";
import { useAuth } from "../../hooks/useAuth";
import { SongsList } from "../SongsList/SongsList";
import { Lyrics } from "../Lyrics/Lyrics";
import { useSearchTrack } from "../../hooks/useSearchTrack";
import { useCurrentTrack } from "../../hooks/useCurrentTrack";

interface Props {
  code: string;
}

export const Dashboard: FC<Props> = ({ code }) => {
  const accessToken = useAuth(code);
  useSpotify(accessToken);

  const { setSearch, searchResults } = useSearchTrack(accessToken);
  const { currentTrack, setCurrentTrack, lyrics } = useCurrentTrack();

  return (
    <>
      <Searchbar setSearch={setSearch} />
      <SongsList setCurrentTrack={setCurrentTrack} list={searchResults} />
      <Lyrics lyrics={lyrics} />

      <Playback token={accessToken} currentTrack={currentTrack} />
    </>
  );
};
