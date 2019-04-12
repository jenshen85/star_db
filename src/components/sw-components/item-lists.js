import React from 'react';
import ItemList from '../item-list';
import { withData, withApiService, withChildFunc } from '../hoc-helper';
  
const renderPerson = ({name, birthYear}) => <span>{name} ({birthYear})</span>
const renderPlanet = ({name, diameter}) => <span>{name} ({diameter})</span>
const renderStarship = ({name, model}) => <span>{name} ({model})</span>

const mapPersonMethodToProps = (apiService) => {
  return {
    getData: apiService.getAllPeople
  }
}

const mapPlanetMethodToProps = (apiService) => {
  return {
    getData: apiService.getAllPlanets
  }
}

const mapStarshipMethodToProps = (apiService) => {
  return {
    getData: apiService.getAllStarships
  }
}

const PersonList = withApiService(
  withData(
    withChildFunc(ItemList, renderPerson)
  ),
  mapPersonMethodToProps
)

const PlanetList = withApiService(
  withData(
    withChildFunc(ItemList, renderPlanet)
  ),
  mapPlanetMethodToProps
);

const StarshipList = withApiService(
  withData(
    withChildFunc(ItemList, renderStarship)
  ),
  mapStarshipMethodToProps
);

export {
  PersonList,
  PlanetList,
  StarshipList,
}