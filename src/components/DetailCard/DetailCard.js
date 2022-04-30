import React from "react";
import { Link } from "react-router-dom";
import StyledDetailCard from "./StyledDetailCard";
import ArrowLeft from "@material-ui/icons/ArrowBack";
import Button from "../Button";

function CardLineInfo({ name, data }) {
  return (
    <p>
      <strong>{name}</strong>: {data}
    </p>
  );
}

function ListCurrenciesInfo({ name, currencies }) {
  let listData = Object.entries(currencies).map(
    ([key, value]) => `${value.name} (${value.symbol})`
  );
  return (
    <p>
      <strong>{name}</strong>: {listData.join(", ")}
    </p>
  );
}

function ListLanguages({ name, languages }) {
  let listData = Object.entries(languages).map(([key, value]) => value);
  return (
    <p>
      <strong>{name}</strong>: {listData.join(", ")}
    </p>
  );
}

const CountryDetailsCard = ({
  countriesBorder,
  name,
  population,
  flags,
  region,
  subregion,
  capital,
  languages,
  currencies,
}) => {
  return (
    <StyledDetailCard>
      <Link to="/">
        <Button leftIcon={<ArrowLeft />}>Back</Button>
      </Link>
      <div className="card-flag-container">
        <img className="card-flag" src={flags.png} alt="country flag" />
      </div>

      <div className="card-info">
        <h3>{name.common}</h3>
        <CardLineInfo name="Native Name" data={name.official} />
        <CardLineInfo name="Population" data={population} />
        <CardLineInfo name="Region" data={region} />
        <CardLineInfo name="Sub Region" data={subregion} />
        <CardLineInfo name="Capital" data={capital[0]} />
        <ListLanguages name="Languages" languages={languages} />
        <br />
        <ListCurrenciesInfo name="Currencies" currencies={currencies} />
      </div>

      <div className="card-borders">
        <h3>{countriesBorder.length ? "Borders" : "No borders"}</h3>
        <div>
          {countriesBorder.map((border) => (
            <Link key={border.name.common} to={border.cca3.toLowerCase()}>
              {border.name.common}
            </Link>
          ))}
        </div>
      </div>
    </StyledDetailCard>
  );
};

export default CountryDetailsCard;
