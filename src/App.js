import React, {useState, useEffect}  from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomeCountries from './pages/HomeCountries'
import CountryPage from './pages/CountryPage'
import SearchBar from './components/SearchBar'

export default function App(){
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // axios.get('https://restcountries.eu/rest/v2/all').then(({data}) => setCountries(data)  ).catch(console.log)
}, [])

  return(
    <div>
      <h3>Where in the world?</h3>
      <Router>
          <Switch>
              <Route exact  path="/" >
                  <SearchBar countries={countries}/>
                  <HomeCountries countries={countries} />
              </Route>
              <Route exact path="/:countryCode" children={<CountryPage />}  />
          </Switch>
      </Router>
    </div>
  )
}