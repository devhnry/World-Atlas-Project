// import { useState, useEffect } from "react";
import Header from "./components/Header";
// import SearchInput from "./components/SearchInput";
import "./index.css";
import useTheme from "./hooks/useTheme";
import RegionFilter from "./components/RegionFilter";
// import CountryGrid from "./components/CountryGrid";
// import { useState } from "react";
import Custom404 from "./components/Custom404";

function App() {
  const { theme, toggleTheme } = useTheme();
  // const [searchQuery, setSearchQuery] = useState('')

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <section className="px-[5.5vw] relative h-full">
        <div className="flex gap-10 flex-col lg:flex-row sm:justify-between max-w-[1440px] mx-auto mt-6 xs:mt-8 sm:mt-10 lg:mt-12">
          {/* <SearchInput onSearch={(searchQuery) => setSearchQuery(searchQuery)} /> */}
          <RegionFilter />
        </div>
        {/* <CountryGrid searchText={searchQuery} /> */}
        <Custom404 />
      </section>
    </>
  );
}

export default App;
