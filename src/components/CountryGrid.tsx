import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Country {
  name: {
    common: string;
  };
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
        <p key={data.name.common}>{data.name.common}</p>
      ))}
    </div>
  );
};

export default CountryGrid;
