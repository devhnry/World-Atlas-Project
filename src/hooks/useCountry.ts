import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Country {
  name: {
    common: string;
  };
  population: number;
  region: string;
  capital: string;
  flags: {
    png: string;
  };
}

const useCountry = () => {
  const [data, setData] = useState<Country[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get("/all")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err.message));

    return () => controller.abort();
  }, []);

  return { data };
};

export default useCountry;
