import React from "react";
import styled from "styled-components";
import Button from "../Button";
import AwesomeTitle from "../styled/PageTitle";
import Brightness4Icon from "@material-ui/icons/Brightness4";

const Container = styled.nav`
  width: 100vw;
  height: 11vh;
  position: sticky;
  top: 0;
  display: flex;
  padding: 5px 10px;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.color.background};
  @media (min-width: 720px) {
    padding: 15px 30px;
  }
`;

export default function Navbar({ setDarkMode, isDarkMode }) {
  const toggleDarkMode = () => {
    setDarkMode((mode) => !mode);
  };

  return (
    <Container>
      <AwesomeTitle>Where in the world?</AwesomeTitle>
      <Button action={toggleDarkMode} leftIcon={<Brightness4Icon />}>
        {isDarkMode ? "Go Light" : "Go Dark"}
      </Button>
    </Container>
  );
}
