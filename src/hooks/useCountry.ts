import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig } from "axios";
import { Country } from "./useCountries";

const useCountry = (query: string, requestConfig?: AxiosRequestConfig) => {
  const [countryData, setCountryData] = useState<Country[]>();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCountry = async () => {
      const controller = new AbortController();

      const endpoint = `/name/${query}`;

      setLoading(true);
      apiClient
        .get<Country[]>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setLoading(false);
          setCountryData(res.data);
          console.log(res.data[0]);
        })
        .catch((err) => {
          setLoading(false);
          setError(err.message);
        });

      return () => controller.abort();
    };
    fetchCountry();
  }, [query, requestConfig]);

  return { countryData, error, loading };
};

export default useCountry;
