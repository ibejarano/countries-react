import styled from "styled-components";

const StyledFilterMenu = styled.div`
  display: flex;
  flex-direction: row nowrap;
  padding: 7px;
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.05);
  width: 20%;
  background: ${(props) => props.theme.color.background};
  margin: 1em auto;
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    width: 100%;
    color: ${(props) => props.theme.color.textColor};
    background: inherit;
    cursor: pointer;
  }
  select::after {
    content: "v";
  }

  button {
    background: ${(props) => props.theme.color.background};
    border: none;
    width: 20%;
  }
  button:hover {
    color: red;
  }

  @media (max-width: 720px) {
    width: 100%;
  }
`;

export default StyledFilterMenu;
