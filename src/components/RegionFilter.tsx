import { FaChevronDown } from "react-icons/fa";

interface Props {
  menuState: boolean;
  onclick: () => void;
}

const RegionFilter = ({ menuState, onclick }: Props) => {
  const regions = ["All", "Africa", "America", "Asia", "Europe", "Oceania"];

  // const menuOpen = false

  return (
    <div className="text-blue-dark-900 dark:text-white text-sm sm:text-base grid gap-1 relative">
      <button
        onClick={onclick}
        className="flex items-center gap-16 bg-white dark:bg-blue-dark-400 p-4 shadow-base rounded-md"
      >
        <p>Filter by Region</p>
        <FaChevronDown />
      </button>
      <div
        className={`bg-white dark:bg-blue-dark-400 shadow-base rounded-md absolute w-full top-16 grid gap-2 transition-all duration-300ms ease-in-out ${
          menuState ? "p-4 opacity-100" : "p-0 h-0 opacity-0 max-h-0"
        }`}
      >
        {regions.map((reg, index) => (
          <button
            className="text-left hover:underline"
            type="button"
            key={index}
          >
            {reg}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RegionFilter;
