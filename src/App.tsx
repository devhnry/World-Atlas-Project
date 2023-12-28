import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import "./index.css";
import useTheme from "./hooks/useTheme";
import RegionFilter from "./components/RegionFilter";
import CountryGrid from "./components/CountryGrid";
import { useState } from "react";

function App() {
  const { theme, toggleTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [menuState, setMenuState] = useState(false);
  const [region, setRegion] = useState("");

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <section className="px-[5.5vw] relative h-full">
        <div className="flex gap-10 flex-col lg:flex-row sm:justify-between max-w-[1440px] mx-auto mt-6 xs:mt-8 sm:mt-10 lg:mt-12">
          <SearchInput
            onSearch={(searchQuery) => setSearchQuery(searchQuery)}
          />
          <RegionFilter
            menuState={menuState}
            onclick={() => {
              setMenuState(!menuState);
              console.log(menuState);
            }}
            setRegion={(region: string) => {
              setRegion(region);
              setMenuState(!menuState);
            }}
          />
        </div>
        <CountryGrid region={region} searchText={searchQuery} />
      </section>
    </>
  );
}

export default App;
