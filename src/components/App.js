import React, { Component } from 'react';
import './App.css';

import Header from './header';
import RandomPlanet from './random-planet';
import PeoplePage from './people-page';
import ErrorButton from './error-button';
import ErrorIndicator from './error-indicator';
import SWapiService from '../services/swapi-services';

export default class App extends Component {
  swapiService = new SWapiService()

  state = {
    showRandomPlanet: true,
    hasError: false
  }

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    })
  }

  componentDidCatch() {
    this.setState({
      hasError: true
    })
  }

  render() {
    if(this.state.hasError) {
      return <ErrorIndicator />
    } else {
      return (
        <div className='container'>
          <Header />
          { this.state.showRandomPlanet ? <RandomPlanet /> : null }

          <div className="row mb2 button-row">
            <button
              className="toggle-planet btn btn-warning btn-lg"
              onClick={this.toggleRandomPlanet}>
              Toggle Random Planet
            </button>
            <ErrorButton />
          </div>

          <PeoplePage />
        </div>
      )
    }
  }
}
