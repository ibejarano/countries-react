import styled from "styled-components";

const StyledFilterMenu = styled.div`
  display: flex;
  flex-direction: row nowrap;
  height: 30px;
  padding: 7px;
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.05);
  width: 50%;
  background: white;
  margin: 26px;
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    /* Add some styling */
    border:none;
    width: 80%;
    color: #333;
    background: inherit;
  }
  select::after{
    content:"v";
  }

  button {
    background: white;
    border: none;
    width: 20%;
  }
  button:hover{
    color: red;
  }
`;

export default StyledFilterMenu;
