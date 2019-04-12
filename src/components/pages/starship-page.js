import React, { Component } from 'react'
import './people-page.css';

import { SwapiServiceConsumer } from '../swapi-service-context';
import { StarshipList, StarshipDetails } from '../sw-components';
import { Record } from '../item-details';
import ErrorBoundry from '../error-boundry';
import Row from '../row';

export default class StarshipPage extends Component {
  state = {
    selectedStarship: null,
  }

  onStarshipSelected = (id) => {
    this.setState({
      selectedStarship: id
    })
  }

  render() {
    const starshipList = <StarshipList onItemSelected={ this.onStarshipSelected } />
  
    const starshipDetails = 
      <SwapiServiceConsumer>
        {
          ({getStarship, getStarshipImage}) => {
            return (
              <StarshipDetails 
                itemId={ this.state.selectedStarship }
                getImgUrl={getStarshipImage}
                getData={getStarship}
              >
                <Record field='gender' label='Gender'/>
                <Record field='birthYear' label='Birth Year'/>
                <Record field='eyeColor' label='Eye Color'/>
              </StarshipDetails>
            )
          }
        }
      </SwapiServiceConsumer>

    return (
      <ErrorBoundry>
        <Row left={ starshipList } right={ starshipDetails }/>
      </ErrorBoundry>
    )
  }
}
