import React from "react";
import styled from "styled-components";
import DarkModeButton from "../DarkModeButton";
import AwesomeTitle from "../styled/PageTitle";

const Container = styled.nav`
  display: flex;
  width: 100vw;
  padding: 5px 15px;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.color.background};

  @media (min-width: 720px){
    padding: 15px 30px;
  }

`;

export default function Navbar(props) {
  return (
    <Container>
      <AwesomeTitle>Where in the world?</AwesomeTitle>
      <DarkModeButton {...props} />
    </Container>
  );
}
