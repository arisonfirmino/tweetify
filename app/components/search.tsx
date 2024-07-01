"use client";

import { useState } from "react";
import { SearchIcon } from "lucide-react";

export default function Search({
  handleSearch,
}: {
  handleSearch: (term: string) => void;
}) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    handleSearch(value);
  };

  return (
    <form className="flex items-center gap-2 rounded-xl bg-gray-200 p-1.5">
      <button className="text-gray-400">
        <SearchIcon size={16} />
      </button>

      <input
        type="search"
        placeholder="Pesquisar"
        value={inputValue}
        onChange={handleInputChange}
        className="w-full bg-transparent outline-none"
      />
    </form>
  );
}
