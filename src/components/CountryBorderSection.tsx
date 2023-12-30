import { Link } from "react-router-dom";
import useCountries from "../hooks/useCountries";
import { Country } from "../types/Country";

interface Props {
  country: Country;
}

const CountryBorderSection = ({ country }: Props) => {
  const { borders } = country;
  const { countries } = useCountries("all");
  
    const getCountryName = (ccaCode: string): string | undefined => {
      const country = countries.find((c) => c.cca3 === ccaCode);
      return country?.name.common;
    };
  return (
    <div>
      <h3 className="text-lg font-extrabold">Border Countries</h3>
      <div className="grid grid-cols-3 gap-2">
        {borders && borders.length > 0 ? (
          borders.slice(0, 3).map((border) => (
            <Link to={`/country/${border}`} key={border}>
              {getCountryName(border)}
            </Link>
          ))
        ) : (
          <p>No border countries</p>
        )}
      </div>
    </div>
  );
};

export default CountryBorderSection;
