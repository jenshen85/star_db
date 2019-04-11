import React, { Component } from 'react'
import './people-page.css';

import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';
import SWapiService from '../../services/swapi-services';
import Row from '../row';

class ErrorBoundry extends Component {
  state = {
    hasError: false,
  }

  componentDidCatch() {
    this.setState({
      hasError: true
    })
  }

  render() {
    return !this.state.hasError ? this.props.children : <ErrorIndicator />
  }
}

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
