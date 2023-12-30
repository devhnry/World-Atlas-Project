import { useParams } from "react-router-dom";
import useCountry from "../hooks/useCountry";
import CountryInfoSection from "../components/CountryInfoSection";
import CountryDetailsSection from "../components/CountryDetailsSection";
import CountryBorderSection from "../components/CountryBorderSection";

const CountryDetailsPage = () => {
  const { countryCode } = useParams();
  const { countryData, error, loading } = useCountry(countryCode!);

  if (error) return <p className="text-white">{error}</p>;
  if (loading) return <p className="text-white">Loading...</p>;
  
  if (!Array.isArray(countryData) || countryData.length === 0) {
    return;
  }

  const country = countryData[0];
  const { name, flags } = country;

  return (
    <div className=" text-blue-dark-900 dark:text-white font-nunito text-md grid px-[5.5vw] mx-auto max-w-[1440px] py-16">
      <img
        className="mb-10 h-[240px] w-full max-w-[380px] rounded-lg"
        src={flags.png}
        alt=""
      />
      <h2 className="text-xl font-extrabold">{name.common}</h2>
      <CountryInfoSection country={country} />
      <CountryDetailsSection country={country} />
      <CountryBorderSection country={country} />
    </div>
  );
};

export default CountryDetailsPage;
