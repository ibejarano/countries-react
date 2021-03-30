import React, { useState } from "react";
import { Link } from "react-router-dom";
import StyledSearchBar from "./styled/StyledSearchBar";
import SearchIcon from "@material-ui/icons/Search";

let resultLink = [];

const SearchBar = ({ countries }) => {
  const [searchText, setSearchText] = useState("");
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  resultLink = countries.filter((country) =>
    country.name.toLowerCase().includes(searchText.toLowerCase())
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
          resultLink.map((res) => (
            <Link to={res.alpha3Code.toLowerCase()} key={res.name}>
              {res.name}
            </Link>
          ))}
      </div>
    </StyledSearchBar>
  );
};

export default SearchBar;
