import styled from "styled-components";

const StyledCard = styled.div`
  width: 260px;
  height: 300px;
  margin: 16px auto;
  background: ${props => props.theme.color.background};
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.08);
  a {
    text-decoration: none;
  }
  img {
    width: 100%;
    max-height: 150px;
  }
  h3 {
    font-size: 14px;
  }
  p {
    font-size: 10px;
  }
  h3,
  p {
    margin-left: 1rem;
    color: ${props => props.theme.color.textColor};
  }
`;

export default StyledCard;
