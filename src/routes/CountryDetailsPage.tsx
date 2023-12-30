import { Link, useParams } from "react-router-dom";
import useCountry from "../hooks/useCountry";
import useCountries from "../hooks/useCountries";

const CountryDetailsPage = () => {
  const { countryCode } = useParams();
  const { countryData, error, loading } = useCountry(countryCode!);
  const { countries } = useCountries("all");

  const formatPopulation = (population: number): string => {
    return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  if (error) return <p className="text-white">{error}</p>;
  if (loading) return <p className="text-white">Loading...</p>;
  if (!Array.isArray(countryData) || countryData.length === 0) {
    return;
  }

  const getCountryName = (ccaCode: string): string | undefined => {
    const country = countries.find((c) => c.cca3 === ccaCode);
    return country?.name.common;
  };

  const country = countryData[0];
  const {
    name: { common, nativeName },
    population,
    region,
    capital,
    flags,
    subregion,
    currencies,
    languages,
    tld: topLevelDomain,
    borders,
  } = country;

  return (
    <div className=" text-blue-dark-900 dark:text-white font-nunito text-md grid gap-2 px-[5.5vw] mx-auto max-w-[1440px] py-16">
      <img className="pb-10" src={flags.png} alt="" />
      <h2 className="text-lg font-extrabold">{common}</h2>
      <div className="py-3 flex flex-col gap-4 text-base">
        <p>Native Name: {nativeName[Object.keys(nativeName)[0]].common}</p>
        <p>Population: {formatPopulation(population)}</p>
        <p>Region: {region}</p>
        <p>SubRegion: {subregion}</p>
        <p>Capital: {capital}</p>
      </div>
      <div className="py-3 flex flex-col gap-4 text-base">
        <p>Top Level Domain: {topLevelDomain.join(", ")} </p>
        <p>
          Currencies:{" "}
          {Object.values(currencies)
            .map((currency) => currency.name)
            .join(", ")}{" "}
        </p>
        <p>Languages: {Object.values(languages).join(", ")}</p>
      </div>
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
    </div>
  );
};

export default CountryDetailsPage;
