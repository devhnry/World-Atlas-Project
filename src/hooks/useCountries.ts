import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig } from "axios";

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

const useCountries = (
  region: string,
  requestConfig?: AxiosRequestConfig
) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCountry = async () => {
      const controller = new AbortController();

      const endpoint = region === "all" ? "/all" : `/region/${region}`;

      setLoading(true);
      apiClient
        .get<Country[]>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setLoading(false);
          setCountries(res.data);
        })
        .catch((err) => {
          setLoading(false);
          if (err.response && err.response.status === 404) {
            setLoading(false);
          } else if (err.response) {
            setError(`Request failed with status ${err.response.status}`);
          } else if (err.request) {
            setError("No response received");
          } else {
            setError(err.message);
          }
        });

      return () => controller.abort();
    };
    fetchCountry();
  }, [requestConfig, region]);

  return { countries, error, loading };
};

export default useCountries;
