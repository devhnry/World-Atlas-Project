import { FaMoon } from "react-icons/fa";

interface Props {
  theme: string;
  toggleTheme: () => void;
}

const Header = ({ theme, toggleTheme }: Props) => {
  return (
    <header className="px-[5.5vw] py-8 bg-white dark:bg-blue-dark-400 shadow-base text-blue-dark-900 dark:text-white">
      <div className="max-w-[1440px] mx-auto flex justify-between">
        <h1 className="text-base xs:text-md md:text-lg lg:text-xl font-extrabold leading-[1.125rem]">
          Where in the world?
        </h1>
        <button
          className="flex gap-2 items-center text-sm xs:text-base sm:text-md font-normal"
          type="button"
          onClick={toggleTheme}
        >
          <FaMoon />
          {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
    </header>
  );
};

export default Header;
