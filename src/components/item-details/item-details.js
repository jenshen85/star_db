import React, { Fragment, Children } from 'react';
import './item-details.css';
import Spinner from '../spinner';
import ErrorButton from '../error-button';

const ItemDetails = ({data, dataLoad, dataImage, children}) => {
  const spinner = <Spinner />
  const items = data
    ? <ItemView image={ dataImage } item={ data }>
        {
          Children.map(
            children,
            (child) => React.cloneElement(child, { item: data })
          )
        }
      </ItemView>
    : <ItemNot />
  return (
    <div className="item-details card">
      {dataLoad ? items : spinner}
    </div>
  )
}

export default ItemDetails

const ItemView = ({ item, image, children }) => {
  const { name } = item
  return (
    <Fragment>
      <img  className="item-details-image" alt=''
          src={image} />

      <div className="card-body">
        <h4>{ name }</h4>
        <ul className="list-group list-group-flush">
          { children }
        </ul>
        <ErrorButton />
      </div>
    </Fragment>
  )
}

const ItemNot = () => {
  return <span>Select item from a list</span>
}

const Record = ({ item, field, label}) => {
  return (
    <li className="list-group-item">
      <span className="term">{ label }</span>
      <span>{ item[field] }</span>
    </li>
  )
}

export {
  Record
}