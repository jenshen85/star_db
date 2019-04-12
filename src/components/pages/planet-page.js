import React, { Component } from 'react'
import './people-page.css';

import { PlanetList, PlanetDetails } from '../sw-components';
import ErrorBoundry from '../error-boundry';
import Row from '../row';

export default class PlanetPage extends Component {
  state = {
    selectedPlanet: null,
  }

  onPlanetSelected = (id) => {
    this.setState({
      selectedPlanet: id
    })
  }

  render() {
    const planetList = <PlanetList onItemSelected={ this.onPlanetSelected } />
    const planetDetails = <PlanetDetails itemId={ this.state.selectedPlanet } />

    return (
      <ErrorBoundry>
        <Row left={ planetList } right={ planetDetails }/>
      </ErrorBoundry>
    )
  }
}
