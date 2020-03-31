import React from 'react';
import {Link} from 'react-router-dom'

const CountryDetailsCard = (props) => {
    console.log(props)
    const borders = props.borders.map(border => <Link key={border} to={`/${border.toLowerCase()}`} >{border}</Link>)
    return (
        <div>
            <h1>{props.name}</h1>
            <div>
                <h2>Borders</h2>
                {borders}
            </div>
        </div>
    );
};

export default CountryDetailsCard