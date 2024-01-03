import { useState } from "react";
import CountryGrid from "../components/CountryGrid";
import RegionFilter from "../components/RegionFilter";
import SearchInput from "../components/SearchInput";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [menuState, setMenuState] = useState(false);
  const [region, setRegion] = useState("all");

  return (
    <>
      <div className="relative h-full">
        <div className="flex gap-10 flex-col lg:flex-row sm:justify-between max-w-[1440px] mx-auto mt-6 xs:mt-8 sm:mt-10 lg:mt-12">
          <SearchInput
            onSearch={(searchQuery) => setSearchQuery(searchQuery)}
          />
          <RegionFilter
            region={region}
            menuState={menuState}
            onclick={() => {
              setMenuState(!menuState);
            }}
            setRegion={(region: string) => {
              setRegion(region);
              setMenuState(!menuState);
            }}
          />
        </div>
        <CountryGrid region={region} searchText={searchQuery} />
      </div>
    </>
  );
};

export default HomePage;
