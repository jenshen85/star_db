import ItemList from '../item-list/';
import { withData } from '../hoc-helper/';

import SWapiService from '../../services/swapi-services';

const swapiService = new SWapiService();
const { 
  getAllPeople,
  getAllPlanets,
  getAllStarships,
} = swapiService;

const PersonList = withData(ItemList, getAllPeople);
const PlanetList = withData(ItemList, getAllPlanets);
const StarshipList = withData(ItemList, getAllStarships);

export {
  PersonList,
  PlanetList,
  StarshipList,
}