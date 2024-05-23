import { LuSearch } from "react-icons/lu";

interface SearchProps {
  setSearchTerm: (term: string) => void;
}

export default function Search({ setSearchTerm }: SearchProps) {
  return (
    <form className="flex items-center gap-2 rounded-xl bg-gray-200 p-1.5">
      <button type="submit" className="text-gray-400">
        <LuSearch />
      </button>
      <input
        type="search"
        placeholder="Pesquisar"
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full bg-transparent outline-none"
      />
    </form>
  );
}
