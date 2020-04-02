import React, {useState} from 'react';
import CountryCard from '../components/CountryCard'
import FilterDropdown from '../components/FilterDropdown'

export default function HomeCountries({countries}){
  const [activeFilter , setActiveFilter ] = useState('')
  return(
    <div >
      <FilterDropdown 
      setActiveFilter={setActiveFilter} 
      activeFilter={activeFilter}
      />
      <div className='country-cards-container'>
      {countries.filter(country => !activeFilter || country.region===activeFilter  ).map(country => <CountryCard  key={country.name}  {...country}  />  )}
      </div>
    </div>
  )
}