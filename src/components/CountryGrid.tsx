import CountryCard from "./CountryCard";
import useCountry from "../hooks/useCountry";

const CountryGrid = () => {
  const { data } = useCountry();

  return (
    <div className="max-w-[1440px] mx-auto mt-8 sm:mt-10 md:mt-12 grid gap-10 2sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2sm:gap-x-4 lg:gap-y-14 lg:gap-x-10 xl:gap-x-16 xl:gap-y-16">
      {data.map((data) => (
        <CountryCard country={data} />
      ))}
    </div>
  );
};

export default CountryGrid;
