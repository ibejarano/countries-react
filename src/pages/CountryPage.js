import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import DetailsCard from "../components/DetailCard";

const CountryPage = () => {
  let { countryCode } = useParams();
  const [countryData, setCountryData] = useState({});
  const [countriesBorder, setCountriesBorder] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `https://restcountries.com/v3.1/alpha/${countryCode}`
      );
      setCountryData(data[0]);
      if (data[0].borders.length) {
        const res = await axios.get(
          `https://restcountries.com/v3.1/alpha?codes=${data[0].borders
            .join(",")
            .toLowerCase()}`
        );
        setCountriesBorder(
          res.data.map((country) => ({
            name: country.name,
            cca3: country.cca3,
          }))
        );
      }

      setLoading(false);
    }

    fetchData();
  }, [countryCode]);

  if (loading) return <h3>Loading...</h3>;

  return <DetailsCard {...countryData} countriesBorder={countriesBorder} />;
};

export default CountryPage;
