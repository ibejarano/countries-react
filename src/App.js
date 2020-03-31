import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomeCountries from './pages/HomeCountries'

export default function App(){

  return(
    <div>
      <h1>My country app</h1>
      <Router>
          <Switch>
              <Route exact  path="/" >
                  <HomeCountries />
              </Route>
          </Switch>
      </Router>
    </div>
  )
}