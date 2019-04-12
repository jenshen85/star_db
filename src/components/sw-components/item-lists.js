import React from 'react';
import ItemList from '../item-list';
import { withData, withApiService, withChildFunc, compose } from '../hoc-helper';

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

const PersonList = compose (
  withApiService(mapPersonMethodToProps),
  withData,
  withChildFunc(renderPerson)
)(ItemList)

const PlanetList = compose (
  withApiService(mapPlanetMethodToProps),
  withData,
  withChildFunc(renderPlanet)
)(ItemList)

const StarshipList = compose (
  withApiService(mapStarshipMethodToProps),
  withData,
  withChildFunc(renderStarship)
)(ItemList)

export {
  PersonList,
  PlanetList,
  StarshipList,
}