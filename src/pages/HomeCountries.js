import React, { useState } from "react";
import styled from "styled-components";

import Card from "../components/Card";
import Dropdown from "../components/Dropdown";
import SearchBar from "../components/SearchBar";

const Container = styled.div`
  background: ${(props) => props.theme.color.mainBackground};
  min-height: 89vh;

  .country-cards-container {
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
            <Card key={country.name} {...country} />
          ))}
      </div>
    </Container>
  );
}
