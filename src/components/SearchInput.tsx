import { FaSearch } from "react-icons/fa";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  return (
    <div className="max-w-[480px] w-full">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex gap-6 items-center bg-white dark:bg-blue-dark-400 py-4 px-8 shadow-base rounded-md text-blue-dark-900 dark:text-white"
      >
        <FaSearch className="text-gray-350 dark:text-white" />
        <input
          onChange={(e) => onSearch(e.target.value)}
          title="searchInput"
          type="text"
          placeholder="Search for a country..."
          className="placeholder:text-sm sm:placeholder:text-base placeholder:text-gray-300 outline-none bg-transparent dark:placeholder:text-white w-full"
        />
      </form>
    </div>
  );
};

export default SearchInput;
