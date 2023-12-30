import { Country } from "../types/Country";

interface Props {
  country: Country;
}

const CountryDetailsSection = ({ country }: Props) => {
  const { currencies, languages, tld: topLevelDomain } = country;

  return (
    <div className="flex flex-col gap-[10px] text-base xs:text-md font-medium">
      <p>
        Top Level Domain:{" "}
        <span className="font-light">{topLevelDomain.join(", ")}</span>{" "}
      </p>
      <p>
        Currencies:{" "}
        <span className="font-light">
          {Object.values(currencies)
            .map((currency) => currency.name)
            .join(", ")}{" "}
        </span>
      </p>
      <p>
        Languages:{" "}
        <span className="font-light">
          {Object.values(languages).join(", ")}
        </span>
      </p>
    </div>
  );
};

export default CountryDetailsSection;
