// import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import "./index.css";
import useTheme from "./hooks/useTheme";
import RegionFilter from "./components/RegionFilter";
import CountryGrid from "./components/CountryGrid";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <section className="px-[5.5vw] relative">
        <div className="flex gap-10 flex-col sm:flex-row sm:justify-between max-w-[1440px] mx-auto mt-6 xs:mt-8 sm:mt-10 lg:mt-12">
          <SearchInput />
          <RegionFilter />
        </div>
        <CountryGrid />
      </section>
    </>
  );
}

export default App;
