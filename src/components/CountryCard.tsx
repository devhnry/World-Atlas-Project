import { Country } from "../hooks/useCountry";

interface Props {
  country: Country;
}

const CountryCard = ({ country }: Props) => {
  const { name, population, region, capital, flags } = country;

  const formatPopulation = (population: number): string => {
    return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="bg-white text-blue-dark-900 dark:text-white dark:bg-blue-dark-400 rounded-md overflow-hidden shadow-md font-nunito hover:cursor-pointer w-[280px] mx-auto">
      <img
        className="h-[160px] w-full object-cover"
        src={flags.png}
        alt=""
      />
      <div className="p-6 pb-12 flex flex-col gap-4 text-base">
        <h1 className="text-lg font-extrabold">{name.common}</h1>
        <ul className="" key={name.common}>
          <li>
            <span className="font-bold">Population: </span>
            {formatPopulation(population)}
          </li>
          <li>
            <span className="font-bold">Region: </span>
            {region}
          </li>
          <li>
            <span className="font-bold">Capital: </span>
            {capital}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CountryCard;
