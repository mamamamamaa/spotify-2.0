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
        className="bg-dark text-gray h-16 w-96 rounded-xl px-2 focus:outline-0 m-12"
      />
    </>
  );
};
