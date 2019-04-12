import ItemList from '../item-list';
import { withData } from '../hoc-helper';

// import SWapiService from '../../services/swapi-services';

// const swapiService = new SWapiService();
// const { 
//   getAllPeople,
//   getAllPlanets,
//   getAllStarships,
// } = swapiService;

const PersonList = withData(ItemList);
const PlanetList = withData(ItemList);
const StarshipList = withData(ItemList);

export {
  PersonList,
  PlanetList,
  StarshipList,
}