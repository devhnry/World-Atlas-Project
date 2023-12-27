import { FaMoon } from "react-icons/fa";

const Header = () => {
  return (
    <header className="px-4 py-8 bg-white shadow-base text-blue-dark-900">
      <div className="max-w-[1440px] mx-auto flex justify-between">
        <h1 className="text-base xs:text-md md:text-lg lg:text-xl font-extrabold leading-[1.125rem]">
          Where in the world?
        </h1>
        <button
          className="flex gap-2 items-center text-sm xs:text-base sm:text-md font-normal"
          type="button"
        >
          <FaMoon />
          Dark Mode
        </button>
      </div>
    </header>
  );
};

export default Header;
