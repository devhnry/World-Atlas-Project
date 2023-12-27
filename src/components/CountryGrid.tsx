import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import CountryCard from "./CountryCard";

export interface Country {
  name: {
    common: string;
  };
  population: number;
  region: string;
  capital: string;
  flags: {
    png: string
  }
}

const CountryGrid = () => {
  const [data, setData] = useState<Country[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get("/all")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err.message));

    return () => controller.abort();

  }, []);

  return (
    <div className="max-w-[1440px] mx-auto mt-8 sm:mt-10 md:mt-12">
      {data.map((data) => (
        <div>
          <CountryCard country={data} />
        </div>
      ))}
    </div>
  );
};

export default CountryGrid;
