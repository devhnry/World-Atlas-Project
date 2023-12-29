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

const useCountry = (
  searchText: string,
  region: string,
  requestConfig?: AxiosRequestConfig
) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [error, setError] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCountry = async () => {
      const controller = new AbortController();

      const endpoint = region === "all" ? "/all" : `/region/${region}`;

      setLoading(true);
      apiClient
        .get(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          const filteredCountries = res.data.filter((country: Country) =>
            country.name.common.toLowerCase().includes(searchText.toLowerCase())
          );
          setCountries(filteredCountries);
          setLoading(false);
          setNotFound(filteredCountries.length === 0);
        })
        .catch((err) => {
          setLoading(false);
          if (err.response && err.response.status === 404) {
            setNotFound(true);
            setLoading(false);
          } else if (err.response) {
            setError(`Request failed with status ${err.response.status}`);
          } else if (err.request) {
            setError("No response received");
          } else {
            setError(err.message);
          }
        });
    };
    fetchCountry();
  }, [searchText, requestConfig, region]);

  return { countries, error, notFound, loading };
};

export default useCountry;
