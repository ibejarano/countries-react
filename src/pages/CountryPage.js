import React, { useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios';

import  CountryDetailsCard from '../components/CountryDetailsCard';

const CountryPage = () => {
    let { countryCode } = useParams();
    console.log(countryCode)
    const [countryData, setCountryData] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        axios.get(`https://restcountries.eu/rest/v2/alpha/${countryCode}`)
        .then(({data}) => {setCountryData(data)
        setLoading(false)}
        )
        .catch(console.log)
    }, [countryCode])

    return (
        <div>
            { !loading &&
                <CountryDetailsCard {...countryData}  />
            }
        </div>
    );
};

export default CountryPage;