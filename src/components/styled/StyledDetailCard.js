import styled from 'styled-components';


const StyledDetailCard = styled.div`
    min-width: 320px;
    max-width: 1200px;
    margin: 16px 1rem;
    box-shadow: 0px 0px 4px 4px rgba(0,0,0,0.08);
    background: ${props => props.theme.color.background};
    display: flex;
    flex-flow: row wrap;
    justify-items: center;
    a {
        text-decoration: none;
        margin-bottom: 1rem;
        background: ${props => props.theme.color.chip};
        padding: 5px;
        border-radius: 0.4rem;
    }

    .card-flag-container {
        max-width: 700px;
        margin: 0 auto;
    }

    img {
        width:100%;
        height: auto;
        margin: 0 auto;
    }
    h3{
        font-size: 16px;
    }
    p, a{
        font-size: 10px;
    }
    h3, p, a {
        margin-left: 1rem;
        color: ${props => props.theme.color.textColor};
    }

    .card-borders-chips {
        display: flex;
        flex-flow: row wrap;
    }

    @media (min-width: 700px) {
        div {
            margin: 3rem;
        }
    }

`

export default StyledDetailCard;