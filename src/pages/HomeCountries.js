import React, { useState } from "react";
import styled from "styled-components";

import CountryCard from "../components/CountryCard";
import Dropdown from "../components/Dropdown";
import SearchBar from "../components/SearchBar";

const Container = styled.div`
  background: ${(props) => props.theme.color.mainBackground};

  .country-cards-container {
    background: yellow;
    display: flex;
    flex-flow: row wrap;
    width: 60%;
    margin: 1em auto;
  }
`;

export default function HomeCountries({ countries }) {
  const [activeFilter, setActiveFilter] = useState("");
  return (
    <Container>
      <SearchBar countries={countries} />
      <Dropdown setActiveFilter={setActiveFilter} activeFilter={activeFilter} />
      <div className="country-cards-container">
        {countries
          .filter((country) => !activeFilter || country.region === activeFilter)
          .map((country) => (
            <CountryCard key={country.name} {...country} />
          ))}
      </div>
    </Container>
  );
}
