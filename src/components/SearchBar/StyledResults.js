import React from "react";
import styled from "styled-components";

const StyledResults = styled.ul`
  position: absolute;
  background: white;
  top: 150px;
  left: calc(50vw - 200px);
  width: 400px;
  margin: 0 auto;
  list-style-type: none;
  border: 1px solid gray;
  padding: 0;

  li {
    font-size: 22px;
    padding: 6px;
    color: black;
    font-weight: 600;
    margin: 8px;
  }

  li:not(:first-child) {
    box-shadow: 2px 2px 12px lightgrey;
  }
`;

export default StyledResults;
