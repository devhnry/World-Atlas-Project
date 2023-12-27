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
    <div>
      {data.map((data) => (
        <div>
          <CountryCard country={data} />
        </div>
      ))}
    </div>
  );
};

export default CountryGrid;
