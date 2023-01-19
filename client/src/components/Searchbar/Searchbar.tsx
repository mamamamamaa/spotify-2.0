import { BaseSyntheticEvent, FC, useState } from "react";

export const Searchbar: FC = () => {
  const [search, setSearch] = useState<string>();

  const handleSearch = (e: BaseSyntheticEvent) => setSearch(e.target.value);

  return (
    <>
      <input
        type="text"
        onChange={handleSearch}
        placeholder="Search track/artist"
      />
    </>
  );
};
