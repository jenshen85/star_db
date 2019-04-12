import React, { Component } from 'react'
import './people-page.css';

import { StarshipList, StarshipDetails } from '../sw-components';
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
    const starshipDetails = <StarshipDetails itemId={ this.state.selectedStarship } />

    return (
      <ErrorBoundry>
        <Row left={ starshipList } right={ starshipDetails }/>
      </ErrorBoundry>
    )
  }
}
