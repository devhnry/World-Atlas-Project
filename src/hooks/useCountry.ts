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

  useEffect(() => {
    const fetchCountry = async () => {
      const controller = new AbortController();

      try {
        if (searchText.trim() !== "") {
          const response = await apiClient.get(`/name/${searchText}`);
          if (response.data.length === 0) {
            setNotFound(true);
          } else {
            setCountries(response.data);
            setNotFound(false)
            console.log(response.data.length);
          }
        } else {
          const response = await apiClient.get("/all", {
            signal: controller.signal,
            ...requestConfig,
          });
          setCountries(response.data);
        }
      } catch (error) {
        if (error instanceof AxiosError) {
          if (error.response && error.response.status === 404) {
            setNotFound(true)
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

  return { countries, error, notFound };
};

export default useCountry;
