import styled from "styled-components";

const AwesomeTitle = styled.div`
  width: 100%;
  height: 64px;
  margin: 0;
  background: ${props=> props.theme.color.background};
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: begin;
  color: ${props => props.theme.color.textColor};
  h1 {
    font-size: 14px;
    margin: 0px 2rem;
  }
`;

export default AwesomeTitle;
