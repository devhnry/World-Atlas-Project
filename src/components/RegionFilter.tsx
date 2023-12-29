import { FaChevronDown } from "react-icons/fa";

interface Props {
  menuState: boolean;
  onclick: () => void;
  region: string;
  setRegion: (region: string) => void;
}

const RegionFilter = ({ menuState, onclick, region, setRegion }: Props) => {
  const regions = [
    { value: "all", label: "all" },
    { value: "africa", label: "africa" },
    { value: "america", label: "america" },
    { value: "asia", label: "asia" },
    { value: "europe", label: "europe" },
    { value: "oceania", label: "oceania" },
  ];

  return (
    <div className="text-blue-dark-900 dark:text-white text-sm sm:text-base grid gap-1 relative">
      <button
        onClick={onclick}
        className="flex items-center justify-between bg-white dark:bg-blue-dark-400 p-4 w-[200px] shadow-base rounded-md"
      >
        <p className="capitalize">{region.toLowerCase() !== "all" ? region : "Filter by Region"}</p>
        <FaChevronDown />
      </button>
      <div
        className={`bg-white dark:bg-blue-dark-400 shadow-md rounded-md absolute w-full top-16 grid gap-2 transition-all duration-300ms ease-in-out ${
          menuState ? "p-4 opacity-100" : "p-0 h-0 opacity-0"
        }`}
      >
        {regions.map((reg) => (
          <button
            className="text-left hover:font-bold capitalize"
            type="button"
            key={reg.value}
            value={reg.value}
            onClick={() => setRegion(reg.label)}
          >
            {reg.value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RegionFilter;
