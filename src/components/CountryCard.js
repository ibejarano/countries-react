import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/country-card.css'

export default function CountryCard( {name, population, region, capital, alpha3Code, flag} ) {
    return <Link className='country-card-container' to={alpha3Code.toLowerCase()} >
        <img src={flag}  alt={`${name} country flag`}  />
        <h1>{name}</h1>
        <h3>{capital}</h3>
        <h3>{population}</h3>
        <h3>{region}</h3>
    </Link>
}