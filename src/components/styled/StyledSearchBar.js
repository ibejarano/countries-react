import styled from "styled-components";

const StyledSearchBar = styled.div`
  display: flex;
  flex-direction: row nowrap;
  height: 30px;
  padding: 7px;
  box-shadow: 0px 0px 4px 4px rgba(0,0,0,0.05);
  margin: 26px;
  input {
    width: 80%;
    border: 0 white solid;
    font-size: 14px;
    flex-grow:5;
  }
  span {
      flex-grow: 1;
      margin: auto 1rem;
      padding: 0;
  }
`;

export default StyledSearchBar;
