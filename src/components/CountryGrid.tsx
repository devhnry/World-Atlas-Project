import CountryCard from "./CountryCard";
import useCountry from "../hooks/useCountry";

const CountryGrid = () => {
  const { data } = useCountry();

  return (
    <div className="max-w-[1440px] mx-auto mt-8 sm:mt-10 md:mt-12">
      {data.map((data) => (
        <div>
          <CountryCard country={data} />
        </div>
      ))}
    </div>
  );
};

export default CountryGrid;
