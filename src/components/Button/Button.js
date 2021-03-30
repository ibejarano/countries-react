import React from "react";
import styled from "styled-components";

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
  border: 1px solid black;
  padding: 8px 4px;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const Button = ({ setDarkMode, leftIcon, children }) => (
  <StyledButton onClick={() => setDarkMode((mode) => !mode)}>
    {leftIcon}
    {children}
  </StyledButton>
);

export default Button;
