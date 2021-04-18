import React from "react";
import { Link } from "react-router-dom";
import StyledDetailCard from "./StyledDetailCard";

function CardLineInfo({ name, data }) {
  return (
    <p>
      <strong>{name}</strong>: {data}
    </p>
  );
}

function ListLineInfo({ name, data }) {
  let listData = data.map((d) => d["name"]);
  return (
    <p>
      <strong>{name}</strong>: {listData.join(", ")}
    </p>
  );
}

const CountryDetailsCard = (props) => {
  return (
    <StyledDetailCard>
      <div className="card-flag-container">
        <img className="card-flag" src={props.flag} alt="country flag" />
      </div>
      {
        <div className="card-info">
          <h3>{props.name}</h3>
          <CardLineInfo name="Native Name" data={props.nativeName} />
          <CardLineInfo name="Population" data={props.population} />
          <CardLineInfo name="Region" data={props.region} />
          <CardLineInfo name="Sub Region" data={props.subregion} />
          <CardLineInfo name="Capital" data={props.capital} />
          <ListLineInfo name="Languages" data={props.languages} />
          <br />
          <ListLineInfo name="Currencies" data={props.currencies} />
          <CardLineInfo name="Gini Index" data={props.gini} />
        </div>
      }
      <div className="card-borders">
        {props.countriesBorder.length ? (
          <>
            <h3>Borders</h3>
            {props.countriesBorder.map((border) => (
              <Link
                key={border.name}
                to={`/${border.alpha3Code.toLowerCase()}`}
              >
                {border.name}
              </Link>
            ))}
          </>
        ) : (
          <h3>No Borders</h3>
        )}
      </div>
    </StyledDetailCard>
  );
};

export default CountryDetailsCard;
