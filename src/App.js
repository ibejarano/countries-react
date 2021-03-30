import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import HomeCountries from "./pages/HomeCountries";
import CountryPage from "./pages/CountryPage";
import light from "./themes/light";
import dark from "./themes/dark";
// import COUNTRIES from "./data/countries";
import "./styles/index.css";

// new things!
import Navbar from "./components/Navbar";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then(({data}) => setCountries(data)  ).catch(console.log)
    // setCountries(COUNTRIES);
  }, []);

  return (
    <ThemeProvider theme={isDarkMode ? dark : light}>
      <Navbar isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
      <Router>
        <Switch>
          <Route exact path="/">
            <HomeCountries countries={countries} />
          </Route>
          <Route exact path="/:countryCode" children={<CountryPage />} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
