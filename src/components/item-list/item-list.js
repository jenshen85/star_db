import React from 'react';
import './item-list.css';
import { withData } from '../hoc-helper/';

import SWapiService from '../../services/swapi-services';

const swapiService = new SWapiService()
const { getAllPeople } = swapiService

const ItemList = (props) => {
  const { data, onItemSelected, children } = props
  const items = data.map((item) => {
    const label = children(item)
    return (
      <li className="list-group-item"
          key={item.id}
          onClick={ () => onItemSelected(item.id) }>
        { label }
      </li>
    )
  })
  return (
    <ul className="item-list list-group">
      { items }
    </ul>
  )
}

export default withData(ItemList, getAllPeople)