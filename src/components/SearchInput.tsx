import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <div className=" max-w-[1440px] mx-auto">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex gap-6 items-center bg-white dark:bg-blue-dark-400 mt-6 xs:mt-8 sm:mt-10 lg:mt-12 py-4 px-8 shadow-base rounded-md max-w-[480px] w-full"
      >
        <FaSearch className="text-gray-350 dark:text-white" />
        <input
          title="searchInput"
          type="text"
          placeholder="Search for a country..."
          className="placeholder:text-sm sm:placeholder:text-base placeholder:text-gray-300 outline-none bg-transparent dark:placeholder:text-white"
        />
      </form>
    </div>
  );
};

export default SearchInput;
