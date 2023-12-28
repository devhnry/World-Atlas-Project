import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, AxiosError } from "axios";

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

const useCountry = (searchText: string, requestConfig?: AxiosRequestConfig) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [error, setError] = useState<string>("");
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCountry = async () => {
      const controller = new AbortController();

      try {
        setLoading(true);
        if (searchText.trim() !== "") {
          const response = await apiClient.get(`/name/${searchText}`);
          if (response.data.length === 0) {
            setNotFound(true);
            setLoading(false);
          } else {
            setLoading(false);
            setNotFound(false);
            setCountries(response.data);
          }
        } else {
          const response = await apiClient.get("/all", {
            signal: controller.signal,
            ...requestConfig,
          });
          setCountries(response.data);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        if (error instanceof AxiosError) {
          if (error.response && error.response.status === 404) {
            setNotFound(true);
            setLoading(false);
          } else if (error.response) {
            setError(`Request failed with status ${error.response.status}`);
          } else if (error.request) {
            setError("No response received");
          } else {
            setError(error.message);
          }
        }
      }
    };
    fetchCountry();
  }, [searchText, requestConfig]);

  return { countries, error, notFound, loading };
};

export default useCountry;
