import styled from "styled-components";

const StyledDetailCard = styled.div`
  min-width: 320px;
  max-width: 1200px;
  min-height: 80vh;
  margin: 16px auto;
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.08);
  background: ${(props) => props.theme.color.background};
  display: flex;
  flex-flow: row wrap;
  justify-items: center;
  a {
    text-decoration: none;
    margin-bottom: 1rem;
    background: ${(props) => props.theme.color.chip};
    padding: 5px;
    border-radius: 0.4rem;
  }

  .card-flag-container {
    max-width: 700px;
    margin: 0 auto;
  }

  img {
    width: 100%;
    height: auto;
    margin: 0 auto;
  }
  h3 {
    font-size: 24px;
  }
  p,
  a {
    font-size: 14px;
  }
  h3,
  p,
  a {
    margin-left: 1rem;
    color: ${(props) => props.theme.color.textColor};
  }

  .card-borders {
    margin: 0 auto;
  }

  .card-borders-chips {
    display: flex;
    flex-flow: row wrap;
  }

  @media (min-width: 931px) {
    padding-right: 4em;
  }
`;

export default StyledDetailCard;
