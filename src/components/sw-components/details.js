import ItemDetails from '../item-details/';
import { withDetailsData/*, withApiService, withChildFunc, compose*/ } from '../hoc-helper';

// const renderPersonDetails = ({name, birthYear}) => <span>{name} ({birthYear})</span>
// const renderPlanetDetails = ({name, diameter}) => <span>{name} ({diameter})</span>
// const renderStarshipDetails = ({name, model}) => <span>{name} ({model})</span>

// const mapPersonDetailsMethodToProps = (apiService) => {
//   return {
//     getData: apiService.getPeople
//   }
// }

// const mapPlanetDetailsMethodToProps = (apiService) => {
//   return {
//     getData: apiService.getPlanets
//   }
// }

// const mapStarshipDetailsMethodToProps = (apiService) => {
//   return {
//     getData: apiService.getStarships
//   }
// }
const PersonDetails = withDetailsData(ItemDetails);
const PlanetDetails = withDetailsData(ItemDetails);
const StarshipDetails = withDetailsData(ItemDetails);

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
}