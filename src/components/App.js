import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
              <Switch>
                <Route path='/' render={() => <h2>Welcome to StarDB</h2>} exact />
                <Route path='/people/:id?' component={PeoplePage} />
                <Route path='/planets' component={PlanetPage} />
                <Route path='/starships' component={StarshipPage} exact />
                <Route path='/starships/:id' render={({match}) => {
                  const { id } = match.params
                  return <StarshipDetails itemId={id} />
                }} />
                {/* rout which not has attribute path, be always activate. */}
                <Route render={() => <h2>404!!! Page not found!!!</h2>} />
              </Switch>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>

    )
  }
}
