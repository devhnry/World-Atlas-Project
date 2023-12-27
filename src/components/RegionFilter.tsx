import { FaChevronDown } from "react-icons/fa";

const RegionFilter = () => {
  return (
    <div className="text-blue-dark-900 dark:text-white">
      <button className="flex items-center gap-16 bg-white dark:bg-blue-dark-400 p-4 shadow-base rounded-md text-sm sm:text-base">
        <p>Filter by Region</p>
        <FaChevronDown />
      </button>
    </div>
  );
}

export default RegionFilter