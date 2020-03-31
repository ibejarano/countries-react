import React, {useState} from 'react';
import CountryCard from '../components/CountryCard'

export default function HomeCountries({countries}){
  const [filter , setFilter ] = useState(null)

  return(
    <div >
      <div>
      <button onClick={() => setFilter(null)}>Remove</button>
        <button onClick={() => setFilter('Africa')}>Africa</button>
        <button onClick={() => setFilter('Americas')}>Americas</button>
        <button onClick={() => setFilter('Asia')}>Asia</button>
        <button onClick={() => setFilter('Europe')}>Europe</button>
        <button onClick={() => setFilter('Oceania')}>Oceania</button>
      </div>
      <div className='country-cards-container'>
      {countries.filter(country => !filter || country.region===filter  ).map(country => <CountryCard  key={country.name}  {...country}  />  )}
      </div>
    </div>
  )
}