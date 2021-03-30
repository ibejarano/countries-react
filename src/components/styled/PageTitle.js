import styled from "styled-components";

const AwesomeTitle = styled.h1`
  color: ${(props) => props.theme.color.textColor};
  font-size: 16px;
  margin: 0;
  padding: 0;

  @media (min-width: 720px) {
    font-size: 24px;
  }
`;

export default AwesomeTitle;
