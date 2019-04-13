import React, { Component } from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import './App.css';

import Header from './header';
import RandomPlanet from './random-planet';
import {  PeoplePage, PlanetPage, StarshipPage,} from './pages';
import { StarshipDetails } from './sw-components';
import ErrorBoundry from './error-boundry/';
import { SwapiServiceProvider } from './swapi-service-context/'

import SWapiService from '../services/swapi-services';

export default class App extends Component {
  swapiService = new SWapiService();

  render() {
    return (
      <ErrorBoundry>
        {/*use context api */}
        <SwapiServiceProvider value={this.swapiService}>
          <Router>
            <div className='container'>
              <Header />
              <RandomPlanet />

              <Route path='/' render={() => <h2>Welcome to StarDB</h2>} exact />
              <Route path='/people' component={PeoplePage} />
              <Route path='/planets' component={PlanetPage} />
              <Route path='/starships' component={StarshipPage} exact />
              <Route path='/starships/:id' render={({match}) => {
                const { id } = match.params
                return <StarshipDetails itemId={id} />
              }} />
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>

    )
  }
}
