import { Country } from "../types/Country";

interface Props {
  country: Country;
}

const CountryDetailsSection = ({ country }: Props) => {
  const { currencies, languages, tld: topLevelDomain } = country;

  return (
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
  );
};

export default CountryDetailsSection;
