import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledCard = styled.div`
  width: 260px;
  margin: 16px auto;
  background: ${(props) => props.theme.color.background};
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.08);
  color: ${(props) => props.theme.color.textColor};
  transition: transform 0.1s linear;
  padding: 0 0 10px 0;

  img {
    width: 100%;
    max-height: 150px;
  }
  h3 {
    font-size: 18px;
  }
  ul {
    font-size: 14px;
    list-style-type: none;
    padding: 0;
    margin: 0 auto;
  }

  ul,
  h3 {
    padding-left: 16px;
    text-decoration: none;
  }

  :hover {
    transform: translate(6px, -6px);
  }
`;

const Card = ({ name, population, region, capital, alpha3Code, flag }) => {
  return (
    <StyledCard>
      <Link
        to={alpha3Code.toLowerCase()}
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <img src={flag} alt={`${name} country flag`} />
        <h3>{name}</h3>
        <ul>
          <li>Population: {population}</li>
          <li>Region: {region}</li>
          <li>Capital: {capital}</li>
        </ul>
      </Link>
    </StyledCard>
  );
};

export default Card;
