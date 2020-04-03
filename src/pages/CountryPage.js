import React, { useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios';

import  CountryDetailsCard from '../components/CountryDetailsCard';

const CountryPage = () => {
    let { countryCode } = useParams();
    const [countryData, setCountryData] = useState({})
    const [countriesBorder, setCountriesBorder] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        axios.get(`https://restcountries.eu/rest/v2/alpha/${countryCode}`)
        .then(({data}) => {setCountryData(data)
        setLoading(false)
        return data.borders}
        )
        .then( (borders) => 
            axios.get(`https://restcountries.eu/rest/v2/alpha?codes=${borders.join(';').toLowerCase()}`)
            .then(({data}) => setCountriesBorder(data.map(country => ({name: country.name, alpha3Code: country.alpha3Code}))))
            .catch(console.log)
        )
        .catch(console.log)
    }, [countryCode])

    return (
        <div>
            { !loading &&
                <CountryDetailsCard {...countryData} countriesBorder={countriesBorder}  />
            }
        </div>
    );
};

export default CountryPage;