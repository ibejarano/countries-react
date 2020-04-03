import styled from 'styled-components';


const StyledDetailCard = styled.div`
    width: 320px;
    margin: 16px auto;
    box-shadow: 0px 0px 4px 4px rgba(0,0,0,0.08);
    a {
        text-decoration: none;
        margin-bottom: 1rem;
        background: #E9E9E9;
        padding: 5px;
        border-radius: 0.4rem;
    }
    img {
        width: 100%;
    }
    h3{
        font-size: 16px;
    }
    p, a{
        font-size: 10px;
    }
    h3, p, a {
        margin-left: 1rem;
        color: black;
    }

    div {
        display: flex;
        flex-flow: row wrap;
    }

`

export default StyledDetailCard;