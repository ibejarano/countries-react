import React from 'react';

// import { Container } from './styles';

const REGIONS = ['Africa','Americas', 'Asia', 'Europe', 'Oceania']

const FilterDropdown = ({setActiveFilter, activeFilter}) => {
    return (
    <div>
      <select  onChange={(e) => setActiveFilter(e.target.value) }
      value={activeFilter}
      >
          <option value='' disabled>Filter by Region</option>
          {REGIONS.map(region => (
              <option key={region} value={region} >{region}</option>
          ))}
      </select>
      { activeFilter &&
        <button onClick={()=> setActiveFilter('')} >x</button>
      }
    </div>
    )
}

export default FilterDropdown;
