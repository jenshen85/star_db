import React, { Component } from 'react'
import './people-page.css';

import { PersonList, PersonDetails } from '../sw-components';
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
  
    const personDetails = <PersonDetails itemId={ this.state.selectedPerson } />

    return (
      <ErrorBoundry>
        <Row left={ personList } right={ personDetails }/>
      </ErrorBoundry>
    )
  }
}
