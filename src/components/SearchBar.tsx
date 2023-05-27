import { FormEvent, useState } from "react";
import LoadingAnimation from "./LoadingAnimation";

export default function SearchBar({
  onSubmit,
  isLoading,
}: {
  onSubmit: (content: string) => Promise<void>;
  isLoading: boolean;
}) {
  const [searchText, setSearchText] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSearchText("");
        onSubmit(searchText);
      }}
    >
      <input
        type="text"
        placeholder="Search a city"
        className="h-11 w-full rounded-xl border bg-transparent p-2 placeholder-white caret-white"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button type="submit">
        <div className="absolute right-2 top-1/2 h-5 w-5 -translate-y-1/2">
          {!isLoading ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          ) : (
            <LoadingAnimation />
          )}
        </div>
      </button>
    </form>
  );
}
