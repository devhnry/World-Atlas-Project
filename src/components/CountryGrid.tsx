import CountryCard from "./CountryCard";
import useCountries from "../hooks/useCountries";
import { Country } from "../types/Country";
import Custom404 from "./Custom404";
import CountryCardSkeleton from "./CountryCardSkeleton";

interface Props {
  region: string;
  searchText: string;
}

const CountryGrid = ({ region, searchText }: Props) => {
  const { countries, error, loading } = useCountries(region);

  const filteredCountries = searchText
    ? countries.filter((country: Country) =>
        country.name.common.toLowerCase().includes(searchText.toLowerCase())
      )
    : countries;

  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];
  const shouldShowSkeleton = loading || countries.length === 0;

  if (shouldShowSkeleton) {
    return (
      <div aria-label="skeleton-grid" className="max-w-[1440px] mx-auto mt-8 sm:mt-10 md:mt-12 grid gap-10 2sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2sm:gap-x-4 lg:gap-y-14 lg:gap-x-10 xl:gap-x-16 xl:gap-y-16">
        {loading &&
          skeleton.map((index) => <CountryCardSkeleton key={index} />)}
      </div>
    );
  }

  if (error) return <p>{error}</p>;
  if (filteredCountries.length === 0) return <Custom404 />;

  return (
    <div className="max-w-[1440px] mx-auto mt-8 sm:mt-10 md:mt-12 grid gap-10 2sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2sm:gap-x-4 lg:gap-y-14 lg:gap-x-10 xl:gap-x-16 xl:gap-y-16">
      {filteredCountries.map((country) => (
        <CountryCard key={country.name.common} country={country} />
      ))}
    </div>
  );
};

export default CountryGrid;
