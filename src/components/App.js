import React, { Component } from 'react';

import Header from './header';
import RandomPlanet from './random-planet';
import ItemList from './item-list';
import PersonDetails from './person-details';

import './App.css';

export default class App extends Component {
  state = {
    showRandomPlanet: true,
    selectedPerson: null
  }

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    })
  }

  onPersonSelecterd = (id) => {
    this.setState({
      selectedPerson: id
    })
  }

  render() {

    return (
      <div className='container'>
        <Header />
        { this.state.showRandomPlanet ? <RandomPlanet /> : null }

        <div className="row mb2 button-row">
          <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}>
            Toggle Random Planet
          </button>
        </div>

        <div className='row mb2'>
          <div className='col-md-6'>
            <ItemList onItemSelected={ this.onPersonSelecterd } />
          </div>
          <div className='col-md-6'>
            <PersonDetails personId={ this.state.selectedPerson } />
          </div>
        </div>
      </div>
    )
  }
}
