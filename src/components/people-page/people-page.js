import React, { Component } from 'react'
import './people-page.css';

import SWapiService from '../../services/swapi-services';

import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorBoundry from '../error-boundry/';
import Row from '../row';

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
    const itemList = <ItemList  
                        onItemSelected={ this.onPersonSelecterd }
                        getData={this.swapiService.getAllPeople}>
      {(i) => `${i.name} (${i.birthYear})`}
    </ItemList>
    const personDetails = <PersonDetails personId={ this.state.selectedPerson } />
    return (
      <ErrorBoundry>
        <Row left={ itemList } right={ personDetails }/>
      </ErrorBoundry>
    )
  }
}
