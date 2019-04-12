import ItemDetails from '../item-details/';
import { withDetailsData } from '../hoc-helper/';

const PersonDetails = withDetailsData(ItemDetails);
const PlanetDetails = withDetailsData(ItemDetails);
const StarshipDetails = withDetailsData(ItemDetails);

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
}