import React from 'react'
import ItemDetails, { Record } from '../item-details/';
import { withDetailsData, withApiService, compose } from '../hoc-helper';

const renderPersonDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field='gender' label='Gender'/>
      <Record field='birthYear' label='Birth Year'/>
      <Record field='eyeColor' label='Eye Color'/>
    </ItemDetails>
  )
}

const mapPersonDetailsMethodToProps = (apiService) => {
  return {
    getData: apiService.getPeople,
    getImgUrl: apiService.getPeopleImage,
  }
}

const PersonDetails = compose(
  withApiService(mapPersonDetailsMethodToProps),
  withDetailsData,
)(renderPersonDetails);

const mapPlanetDetailsMethodToProps = (apiService) => {
  return {
    getData: apiService.getPlanet,
    getImgUrl: apiService.getPlanetImage,
  }
}

const renderPlanetDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field='population' label='Population'/>
      <Record field='rotationPeriod' label='Rotation period'/>
      <Record field='diameter' label='diameter'/>
    </ItemDetails>
  )
}

const PlanetDetails = compose(
  withApiService(mapPlanetDetailsMethodToProps),
  withDetailsData,
)(renderPlanetDetails);

const mapStarshipDetailsMethodToProps = (apiService) => {
  return {
    getData: apiService.getStarship,
    getImgUrl: apiService.getStarshipImage,
  }
}

const renderStarshipDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field='model' label='Model'/>
      <Record field='length' label='Length'/>
      <Record field='costInCredits' label='Cost'/>
    </ItemDetails>
  )
}

const StarshipDetails = compose(
  withApiService(mapStarshipDetailsMethodToProps),
  withDetailsData,
)(renderStarshipDetails);

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
}