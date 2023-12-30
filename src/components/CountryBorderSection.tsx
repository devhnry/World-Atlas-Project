import { Link } from "react-router-dom";
import useCountries from "../hooks/useCountries";
import { Country } from "../types/Country";

interface Props {
  country: Country;
}

const CountryBorderSection = ({ country }: Props) => {
  const { name, borders } = country;
  const { countries } = useCountries("all");

  const getCountryName = (ccaCode: string): string | undefined => {
    const country = countries.find((c) => c.cca3 === ccaCode);
    return country?.name.common;
  };
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-baseline">
      <h3 className="text-md font-bold 2md:whitespace-nowrap">Border Countries:</h3>
      <div className="flex flex-wrap gap-2 items-start">
        {borders && borders.length > 0 ? (
          borders.slice(0, 3).map((border) => (
            <Link
              className="text-sm xs:text-base max-w-fit px-5 w-full py-2 rounded-[3px] text-center bg-white dark:bg-blue-dark-400 font-light shadow-base"
              to={`/country/${border}`}
              key={border}
            >
              {getCountryName(border)}
            </Link>
          ))
        ) : (
          <p>{name.common} has no border countries</p>
        )}
      </div>
    </div>
  );
};

export default CountryBorderSection;
