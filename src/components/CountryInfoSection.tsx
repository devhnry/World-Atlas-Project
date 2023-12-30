import { Country } from "../types/Country";

interface Props{
  country: Country
}

const CountryInfoSection = ({country} : Props) => {

  const formatPopulation = (population: number): string => {
    return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const {name: { nativeName}, population, region, subregion, capital,} = country

  return (
    <div className="py-3 flex flex-col gap-4 text-base">
      <p>Native Name: {nativeName[Object.keys(nativeName)[0]].common}</p>
      <p>Population: {formatPopulation(population)}</p>
      <p>Region: {region}</p>
      <p>SubRegion: {subregion}</p>
      <p>Capital: {capital}</p>
    </div>
  );
}

export default CountryInfoSection