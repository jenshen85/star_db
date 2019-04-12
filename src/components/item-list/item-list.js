import React from 'react';
import './item-list.css';
import Spinner from '../spinner';
import { withData } from '../hoc-helper/';

import SWapiService from '../../services/swapi-services';

const swapiService = new SWapiService()
const { getAllPeople } = swapiService

const ItemList = (props) => {
  const spinner = <Spinner />
  const { data, onItemSelected, children } = props
  const content = data ? data.map((item) => {
    const label = children(item)
    return (
      <li className="list-group-item"
          key={item.id}
          onClick={ () => onItemSelected(item.id) }>
        { label }
      </li>
    )
  }) : spinner
  return (
    <ul className="item-list list-group">
      { content }
    </ul>
  )
}

export default withData(ItemList, getAllPeople)