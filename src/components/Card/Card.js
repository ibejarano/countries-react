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

  @media (max-width: 600px) {
    width: 100%;
    margin: 4px auto;
    padding: 0;

    h3 {
      margin-bottom: 0;
    }

    a {
      display: flex;
      flex-flow: row nowrap;

      img {
        width: 50%;
      }

      div {
        width: 50vw;
      }
    }
  }
`;

const Card = ({ name, population, region, capital, cca3, flags }) => {
  return (
    <StyledCard>
      <Link
        to={cca3.toLowerCase()}
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <img src={flags.png} alt={`${name.common} country flag`} />
        <div>
          <h3>{name.common}</h3>
          <ul>
            <li>Population: {population}</li>
            <li>Region: {region}</li>
            <li>Capital: {capital}</li>
          </ul>
        </div>
      </Link>
    </StyledCard>
  );
};

export default Card;
