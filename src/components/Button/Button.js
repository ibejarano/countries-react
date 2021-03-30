import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: inherit;
  color: ${(props) => props.theme.color.textColor};
  font-size: 16px;
  margin: auto 0;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid ${(props) => props.theme.color.textColor};
  padding: 8px;
  cursor: pointer;

  i {
    margin: auto 4px;
    padding: 0;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 4px 2px;
  }
`;

const Button = ({ action, leftIcon, children }) => (
  <StyledButton onClick={action}>
    <i>{leftIcon}</i>
    {children}
  </StyledButton>
);

export default Button;
