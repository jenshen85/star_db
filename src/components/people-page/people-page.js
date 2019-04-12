import React, { Component } from 'react'
import './people-page.css';

import { PersonList, PersonDetails } from '../sw-components/';
import { Record } from '../item-details';
import ErrorBoundry from '../error-boundry/';
import Row from '../row';

import SWapiService from '../../services/swapi-services';

export default class PeoplePage extends Component {
  swapiService = new SWapiService();

  state={
    selectedPerson: null,
  }

  onPersonSelecterd = (id) => {
    this.setState({
      selectedPerson: id
    })
  }

  render() {
    const personList = <PersonList  
            onItemSelected={ this.onPersonSelecterd }
          >
            {(i) => `${i.name} (${i.birthYear})`}
          </PersonList>
    const { getPeopleImg } = this.swapiService
    const personDetails = <PersonDetails 
            itemId={ this.state.selectedPerson }
            getImgUrl={getPeopleImg} 
          >
            <Record field='gender' label='Gender'/>
            <Record field='birthYear' label='Birth Year'/>
            <Record field='eyeColor' label='Eye Color'/>
          </PersonDetails>
    return (
      <ErrorBoundry>
        <Row left={ personList } right={ personDetails }/>
      </ErrorBoundry>
    )
  }
}
