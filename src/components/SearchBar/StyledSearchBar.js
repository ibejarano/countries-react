import styled from "styled-components";

const StyledSearchBar = styled.div`
  display: flex;
  flex-direction: row nowrap;
  align-items: center;
  padding: 10px;
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.05);
  margin: 20px auto;
  width: 50%;
  background: ${(props) => props.theme.color.background};
  color: ${(props) => props.theme.color.textColor};
  input {
    width: 80%;
    border: 0 white solid;
    font-size: 16px;
    flex-grow: 5;
    padding: 5px 10px;
    background: ${(props) => props.theme.color.background};
    color: ${(props) => props.theme.color.textColor};
  }
  span {
    flex-grow: 1;
    margin: auto 0.5em;
    padding: 0;
  }

  div {
    position: absolute;
    top: 200px;
    background: white;
    display: flex;
    flex-flow: column nowrap;
    width: 48%;
  }

  @media (max-width: 720px) {
    width: 100%;
  }
`;

export default StyledSearchBar;
