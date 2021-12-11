import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import HomeCountries from "./pages/HomeCountries";
import CountryPage from "./pages/CountryPage";
import Layout from "./components/Layout";
import light from "./themes/light";
import dark from "./themes/dark";
import "./styles/index.css";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then(({ data }) => setCountries(data)).catch(() => alert("An error has ocurred with server"))
  }, []);


  return (
    <ThemeProvider theme={isDarkMode ? dark : light}>
      <Layout setDarkMode={setDarkMode} isDarkMode={isDarkMode}>
        <Router>
          <Switch>
            <Route exact path="/">
              <HomeCountries countries={countries} />
            </Route>
            <Route exact path="/:countryCode" children={<CountryPage />} />
          </Switch>
        </Router>
      </Layout>
    </ThemeProvider>
  );
}
