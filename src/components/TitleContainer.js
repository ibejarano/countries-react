import React from "react";
import styled from "styled-components";
import DarkModeButton from "./DarkModeButton";
import AwesomeTitle from "./styled/PageTitle";

const Container = styled.div`
    display: flex;
    width: 100vw;
    background: ${props => props.theme.color.background};
`;

const TitleContainer = (props) => (
  <Container>
    <AwesomeTitle>
      <h1>Where in the world?</h1>
    </AwesomeTitle>
    <DarkModeButton {...props} />
  </Container>
);

export default TitleContainer;
