import styled from "styled-components";

const AwesomeTitle = styled.div`
  width: 100%;
  height: 64px;
  margin: 0;
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
