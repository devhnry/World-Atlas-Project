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
    <div>
      <h3 className="text-md font-bold pb-4">Border Countries:</h3>
      <div className="grid grid-cols-3 gap-2">
        {borders && borders.length > 0 ? (
          borders.slice(0, 3).map((border) => (
            <Link className="text-sm py-1 rounded-[3px] text-center bg-blue-dark-400 font-light" to={`/country/${border}`} key={border}>
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
