import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Container = styled.div`
  width: 100vw;
  background: ${(props) => props.theme.color.mainBackground};
`;

export default function Layout({ setDarkMode, isDarkMode, children }) {
  return (
    <Container>
      <Navbar isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
      {children}
    </Container>
  );
}
