import React from "react";
import styled from "styled-components";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";

const StyledButton = styled.button`
  background: ${props => props.theme.color.background};
  margin-left: 16px;
  margin-top: 16px;
  padding: 10px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  color: ${props => props.theme.color.textColor};
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
