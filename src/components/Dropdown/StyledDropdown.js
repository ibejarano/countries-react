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
    font-size: 16px;
  }
  select::after {
    content: "v";
  }

  button {
    background: ${(props) => props.theme.color.background};
    border: 1px solid black;
    width: 10%;
    font-size: 16px;
    font-weight: 900;
    transition: transform 0.1s linear;
    cursor: pointer;
  }
  button:hover {
    color: red;
    transform: scale(1.1);
  }

  @media (max-width: 720px) {
    width: 100%;

    select {
      font-size: 18px;
    }
  }
`;

export default StyledFilterMenu;
