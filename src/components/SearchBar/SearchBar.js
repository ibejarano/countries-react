import React, { useState } from "react";
import { Link } from "react-router-dom";
import StyledSearchBar from "./StyledSearchBar";
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
    <StyledSearchBar>
      <SearchIcon />
      <input
        type="text"
        onChange={handleChange}
        placeholder="Search for a country..."
        value={searchText}
      />
      <div>
        {searchText !== "" &&
          resultLink.map((res, idx) => (
            <Link
              to={res.cca3.toLowerCase()}
              key={idx}
              style={{
                padding: "0.5em",
                textDecoration: "none",
                borderBottom: "1px solid black",
              }}
            >
              {res.name.common}
            </Link>
          ))}
      </div>
    </StyledSearchBar>
  );
};

export default SearchBar;
