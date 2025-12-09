import { Search } from "lucide-react";

export const SearchBar = () => {
  return (
    <div className="flex gap-5 items-center justify-center bg-highlight-default px-1.5 py-1 rounded">
      <Search color="white" size="20" />
      <input
        className="w-md placeholder:text-text-default text-text-default focus:outline-none"
        type="text"
        placeholder="search Anime"
      />
    </div>
  );
};
