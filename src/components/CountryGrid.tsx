import CountryCard from "./CountryCard";
import useCountry from "../hooks/useCountry";
import Custom404 from "./Custom404";
import CountryCardSkeleton from "./CountryCardSkeleton";

interface Props {
  region: string;
  searchText: string;
}

const CountryGrid = ({ region, searchText }: Props) => {
  const { countries, error, notFound, loading } = useCountry(
    searchText,
    region
  );
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return <p>{error}</p>;
  if (notFound) return <Custom404 />;

  return (
    <div className="max-w-[1440px] mx-auto mt-8 sm:mt-10 md:mt-12 grid gap-10 2sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2sm:gap-x-4 lg:gap-y-14 lg:gap-x-10 xl:gap-x-16 xl:gap-y-16">
      {loading && skeleton.map((index) => <CountryCardSkeleton key={index} />)}
      {countries.map((country) => (
        <CountryCard key={country.name.common} country={country} />
      ))}
    </div>
  );
};

export default CountryGrid;
