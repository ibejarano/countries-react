import styled from "styled-components";

const StyledDetailCard = styled.div`
  min-width: 320px;
  max-width: 600px;
  min-height: 80vh;
  margin: 16px auto;
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.08);
  background: ${(props) => props.theme.color.background};
  display: flex;
  flex-flow: column wrap;
  justify-items: center;
  padding: 10px;
  a:first-child {
    background: white;
  }

  a {
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
    margin: 0;
    padding: 0;

    div {
      display: flex;
      flex-flow: row wrap;

      a {
        border-radius: 12px;
        padding: 8px 16px;
        margin-bottom: 10px;
        background: ${(props) => props.theme.color.chip};
      }
    }
  }

  @media (min-width: 931px) {
    padding-right: 4em;
  }
`;

export default StyledDetailCard;
