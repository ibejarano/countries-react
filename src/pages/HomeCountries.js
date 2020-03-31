import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CountryCard from '../components/CountryCard'

export default function HomeCountries(){
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
      axios.get('https://restcountries.eu/rest/v2/all').then(({data}) => setCountries(data)  ).catch(console.log)
  }, [])
  console.log(countries)

  return(
    <div className='country-cards-container'>
      {countries.map(country => <CountryCard  key={country.name}  {...country}  />  )}
    </div>
  )
}