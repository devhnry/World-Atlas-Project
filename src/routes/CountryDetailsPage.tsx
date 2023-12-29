import { useParams } from "react-router-dom";
import useCountry from "../hooks/useCountry";

const CountryDetailsPage = () => {
  const { name } = useParams();
  const { countryData, error, loading } = useCountry(name!);

  if (error) return <p className="text-white">{error}</p>;
  if (loading) return <p className="text-white">Loading...</p>;
  if (!Array.isArray(countryData) || countryData.length === 0) {
    return;
  }
  const country = countryData[0];

  return (
    <div className="text-white font-nunito text-2xl">{country.name.common}</div>
  );
};

export default CountryDetailsPage;
