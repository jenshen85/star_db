import ItemDetails from '../item-details/';
import { withDetailsData } from '../hoc-helper/';

import SWapiService from '../../services/swapi-services';

const swapiService = new SWapiService();
const { 
  getPeople,
  getPlanet,
  getStarship,
} = swapiService;

const PersonDetails = withDetailsData(ItemDetails, getPeople);
const PlanetDetails = withDetailsData(ItemDetails, getPlanet);
const StarshipDetails = withDetailsData(ItemDetails, getStarship);

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
}