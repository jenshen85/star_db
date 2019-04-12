import React, { Component } from 'react'
import './people-page.css';

import { SwapiServiceConsumer } from '../swapi-service-context';
import { PersonList, PersonDetails } from '../sw-components';
import { Record } from '../item-details';
import ErrorBoundry from '../error-boundry';
import Row from '../row';

export default class PeoplePage extends Component {
  state = {
    selectedPerson: null,
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    })
  }

  render() {
    const personList = <PersonList onItemSelected={ this.onPersonSelected } />
  
    const personDetails = 
      <SwapiServiceConsumer>
        {
          ({getPeople, getPeopleImage}) => {
            return (
              <PersonDetails 
                itemId={ this.state.selectedPerson }
                getImgUrl={getPeopleImage}
                getData={getPeople}
              >
                <Record field='gender' label='Gender'/>
                <Record field='birthYear' label='Birth Year'/>
                <Record field='eyeColor' label='Eye Color'/>
              </PersonDetails>
            )
          }
        }
      </SwapiServiceConsumer>

    return (
      <ErrorBoundry>
        <Row left={ personList } right={ personDetails }/>
      </ErrorBoundry>
    )
  }
}
