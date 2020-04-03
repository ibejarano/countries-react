import React from "react";
import { Link } from "react-router-dom";
import StyledCard from "./styled/StyledCard";

export default function CountryCard({
  name,
  population,
  region,
  capital,
  alpha3Code,
  flag
}) {
    console.log(region)
  return (
      <StyledCard>
    <Link to={alpha3Code.toLowerCase()}>
        <img src={flag} alt={`${name} country flag`} />
        <h3>{name}</h3>
        <p>Population: {population}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>
    </Link>
      </StyledCard>
  );
}
