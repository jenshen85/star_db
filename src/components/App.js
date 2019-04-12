import React, { Component } from 'react';
import './App.css';

import Header from './header';
import RandomPlanet from './random-planet';
import {  PeoplePage, PlanetPage, StarshipPage,} from './pages';
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
          <div className='container'>
            <Header />
            <RandomPlanet />

            <PeoplePage />
            <PlanetPage />
            <StarshipPage />
          </div>             
        </SwapiServiceProvider>
      </ErrorBoundry>

    )
  }
}
