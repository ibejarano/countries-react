import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {ThemeProvider} from 'styled-components';
import HomeCountries from "./pages/HomeCountries";
import CountryPage from "./pages/CountryPage";
import SearchBar from "./components/SearchBar";
import Container from './components/Container';
import light from './themes/light'
import dark from './themes/dark'

import AwesomeTitle from "./components/styled/PageTitle";
import "./styles/index.css";
import COUNTRIES from "./data/countries";

export default function App() {
  const [countries, setCountries] = useState([]);;
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setCountries(COUNTRIES);
    // axios.get('https://restcountries.eu/rest/v2/all').then(({data}) => setCountries(data)  ).catch(console.log)
  }, []);

  return (
    <ThemeProvider theme={isDarkMode ? dark : light}>
      <Container>
      <AwesomeTitle>
        <h1>Where in the world?</h1>
      </AwesomeTitle>
      <button onClick={()=>setDarkMode(!isDarkMode)} >
        Turn On dark mode!
      </button>
      <Router>
        <Switch>
          <Route exact path="/">
            <SearchBar countries={countries} />
            <HomeCountries countries={countries} />
          </Route>
          <Route exact path="/:countryCode" children={<CountryPage />} />
        </Switch>
      </Router>
      </Container>
    </ThemeProvider>
  );
}
