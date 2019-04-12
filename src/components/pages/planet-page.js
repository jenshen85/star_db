import React, { Component } from 'react'
import './people-page.css';

import { SwapiServiceConsumer } from '../swapi-service-context';
import { PlanetList, PlanetDetails } from '../sw-components';
import { Record } from '../item-details';
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
  
    const planetDetails = 
      <SwapiServiceConsumer>
        {
          ({getPlanet, getPlanetImage}) => {
            return (
              <PlanetDetails 
                itemId={ this.state.selectedPlanet }
                getImgUrl={getPlanetImage}
                getData={getPlanet}
              >
                <Record field='population' label='Population'/>
                <Record field='rotationPeriod' label='Rotation period'/>
                <Record field='diameter' label='diameter'/>
              </PlanetDetails>
            )
          }
        }
      </SwapiServiceConsumer>

    return (
      <ErrorBoundry>
        <Row left={ planetList } right={ planetDetails }/>
      </ErrorBoundry>
    )
  }
}
