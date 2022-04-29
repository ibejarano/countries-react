import React, { useState } from "react";
import { Link } from "react-router-dom";
import StyledSearchBar from "./StyledSearchBar";
import StyledResults from "./StyledResults";
import SearchIcon from "@material-ui/icons/Search";

let resultLink = [];

const SearchBar = ({ countries }) => {
  const [searchText, setSearchText] = useState("");
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  resultLink = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <StyledSearchBar>
        <SearchIcon />
        <input
          type="text"
          onChange={handleChange}
          placeholder="Search for a country..."
          value={searchText}
        />
      </StyledSearchBar>
      {searchText !== "" && (
        <StyledResults>
          <li> Search results</li>
          {resultLink.map((res, idx) => (
            <li key={idx}>
              <Link
                to={res.cca3.toLowerCase()}
                style={{
                  padding: "0.5em",
                  textDecoration: "none",
                }}
              >
                {res.name.common}
              </Link>
            </li>
          ))}
        </StyledResults>
      )}
    </>
  );
};

export default SearchBar;
