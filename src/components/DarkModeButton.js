import React from "react";
import styled from "styled-components";
import Brightness4Icon from "@material-ui/icons/Brightness4";

const StyledButton = styled.button`
  background: inherit;
  color: ${(props) => props.theme.color.textColor};
  font-size: 16px;
  margin: auto 0;
  width: 160px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const DarkModeButton = ({ isDarkMode, setDarkMode }) => (
  <StyledButton onClick={() => setDarkMode(!isDarkMode)}>
    <Brightness4Icon />
    {/* <p>Dark Mode</p> */}
  </StyledButton>
);

export default DarkModeButton;
