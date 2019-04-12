import React, { Component } from 'react'
import './people-page.css';

import { SwapiServiceConsumer } from '../swapi-service-context/';
import { PersonList, PersonDetails } from '../sw-components/';
import { Record } from '../item-details';
import ErrorBoundry from '../error-boundry/';
import Row from '../row';

export default class PeoplePage extends Component {
  state={
    selectedPerson: null,
  }

  onPersonSelecterd = (id) => {
    this.setState({
      selectedPerson: id
    })
  }

  render() {
    const personList = 
      <SwapiServiceConsumer>
        {
          ({ getAllPeople }) => {
            return (
              <PersonList getData={ getAllPeople } onItemSelected={ this.onPersonSelecterd } >
                {(i) => `${i.name} (${i.birthYear})`}
              </PersonList>
            )
          }
        }
      </SwapiServiceConsumer>
  
    const personDetails = 
      <SwapiServiceConsumer>
        {
          ({getPeople, getPeopleImg}) => {
            return (
              <PersonDetails 
                itemId={ this.state.selectedPerson }
                getImgUrl={getPeopleImg}
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
