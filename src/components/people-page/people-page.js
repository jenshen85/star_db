import React, { Component } from 'react'
import './people-page.css';

import ItemList from '../item-list';
import ItemDetails, { Record } from '../item-details';
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
    const personList = <ItemList  
            onItemSelected={ this.onPersonSelecterd }
          >
            {(i) => `${i.name} (${i.birthYear})`}
          </ItemList>
    const { getPeopleImg } = this.swapiService
    const personDetails = <ItemDetails 
            // getData={ getPeople } 
            itemId={ this.state.selectedPerson }
            getImgUrl={getPeopleImg} 
          >
            <Record field='gender' label='Gender'/>
            <Record field='birthYear' label='Birth Year'/>
            <Record field='eyeColor' label='Eye Color'/>
          </ItemDetails>
    return (
      <ErrorBoundry>
        <Row left={ personList } right={ personDetails }/>
      </ErrorBoundry>
    )
  }
}
