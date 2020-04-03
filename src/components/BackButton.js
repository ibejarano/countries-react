import React from "react";
import styled from "styled-components";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";

const StyledButton = styled.button`
  background: white;
  margin-left: 16px;
  margin-top: 16px;
  padding: 10px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  span {
    margin-left: 0.5rem;
    text-decoration: none;
  }
`;

const BackButton = () => (
  <Link to="/">
    <StyledButton>
      <ArrowBackIcon />
      <span>Back</span>
    </StyledButton>
  </Link>
);

export default BackButton;
