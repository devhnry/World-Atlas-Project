import { Link, useParams } from "react-router-dom";
import useCountry from "../hooks/useCountry";
import CountryInfoSection from "../components/CountryInfoSection";
import CountryDetailsSection from "../components/CountryDetailsSection";
import CountryBorderSection from "../components/CountryBorderSection";
import { FaArrowLeft } from "react-icons/fa";
import LinearProgress from "@mui/material/LinearProgress";

const CountryDetailsPage = () => {
  const { countryCode } = useParams();
  const { countryData, error, loading } = useCountry(countryCode!);

  if (error) return <p className="text-white">{error}</p>;
  if (loading) return (
    <div className="py-10">
      <LinearProgress />
    </div>
  );

  if (!Array.isArray(countryData) || countryData.length === 0) {
    return;
  }

  const country = countryData[0];
  const { name, flags } = country;

  return (
    <>
      <main className=" text-blue-dark-900 dark:text-gray-200 font-nunito text-md grid mx-auto max-w-[1440px] py-16">
        <Link
          className="text-base w-fit py-2 sm:py-3 px-6 sm:px-8 rounded-md text-center bg-white dark:bg-blue-dark-400 font-light shadow-base flex gap-5 items-center mb-12 sm:mb-20"
          to={"/"}
        >
          <span>
            <FaArrowLeft />
          </span>{" "}
          Back
        </Link>
        <div className="grid gap-5 2md:grid-cols-2 2md:gap-10 lg:gap-5">
          <img
            className="mb-10 w-full h-full max-w-[450px] max-h-[400px] rounded-md 2md:size-full 2md:max-w-[560px]"
            src={flags.png}
            alt=""
          />
          <div className="2md:py-[40px]">
            <h2 className="text-xl xs:text-[30px] font-extrabold pb-4">
              {name.common}
            </h2>
            <div className="grid gap-8 sm:gap-16">
              <div className="grid gap-8 sm:grid-cols-2 items-start sm:gap-10 max-w-[680px] w-full">
                <CountryInfoSection country={country} />
                <CountryDetailsSection country={country} />
              </div>
              <CountryBorderSection country={country} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CountryDetailsPage;
