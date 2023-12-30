import { Country } from "../types/Country";

interface Props {
  country: Country;
}

const CountryInfoSection = ({ country }: Props) => {
  const formatPopulation = (population: number): string => {
    return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const {
    name: { nativeName },
    population,
    region,
    subregion,
    capital,
  } = country;

  return (
    <div className="flex flex-col gap-[10px] text-base xs:text-md font-medium">
      <p>
        Native Name:{" "}
        <span className="font-light">
          {" "}
          {nativeName[Object.keys(nativeName)[0]].common}
        </span>
      </p>
      <p>
        Population:{" "}
        <span className="font-light">{formatPopulation(population)}</span>
      </p>
      <p>
        Region: <span className="font-light">{region} </span>
      </p>
      <p>
        SubRegion: <span className="font-light"> {subregion}</span>
      </p>
      <p>
        Capital: <span className="font-light"> {capital} </span>
      </p>
    </div>
  );
};

export default CountryInfoSection;
