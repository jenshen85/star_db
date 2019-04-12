import React, { Component } from 'react';
import './App.css';

import Header from './header';
import RandomPlanet from './random-planet';
import PeoplePage from './people-page';
import ErrorButton from './error-button';
import ErrorIndicator from './error-indicator';
// import SWapiService from '../services/swapi-services';
// import Row from './row/';

// import ItemDetails, { Record } from './item-details';

export default class App extends Component {
  // swapiService = new SWapiService()

  state = {
    showRandomPlanet: true,
    hasError: false
  }

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    })
  }

  componentDidCatch() {
    this.setState({
      hasError: true
    })
  }

  render() {
    if(this.state.hasError) {
      return <ErrorIndicator />
    } else {
      // const { getPeople, getStarship, getPeopleImg, getStarshipImage } = this.swapiService
      // const personDetails = <ItemDetails 
      //         getData={ getPeople } 
      //         itemId={ 11 }
      //         getImgUrl={getPeopleImg} >
      //         <Record field='gender' label='Gender'/>
      //         <Record field='birthYear' label='Birth Year'/>
      //         <Record field='eyeColor' label='Eye Color'/>
      //       </ItemDetails>

      // const starshipDetails = <ItemDetails 
      //         getData={ getStarship } 
      //         itemId={ 10 }
      //         getImgUrl={getStarshipImage} >
              
      //         <Record field='model' label='Model'/>
      //         <Record field='length' label='Length'/>
      //         <Record field='costInCredits' label='Cost'/>
      //       </ItemDetails>
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
            <ErrorButton />
          </div>

          <PeoplePage />
          {/* <Row left={personDetails} right={starshipDetails}/> */}
        </div>
      )
    }
  }
}
