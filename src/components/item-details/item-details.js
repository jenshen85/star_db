import React, { Component, Fragment, Children } from 'react';
import './item-details.css';
import Spinner from '../spinner';
import SWapiService from '../../services/swapi-services';
import ErrorButton from '../error-button';

export default class ItemDetails extends Component {
  swapiService = new SWapiService()

  state = {
    item: null,
    itemLoad: true,
    image: null,
  }

  componentDidMount() {
    this.updateItem()
  }

  componentDidUpdate(prevProps) {
    if(this.props.itemId !== prevProps.itemId) {
      this.updateItem()
    }
  }

  updateItem() {
    this.setState({itemLoad: false})
    const { itemId, getData, getImgUrl } = this.props
    if(itemId) {
      getData(itemId)
        .then((item) => {
          this.setState({
            item,
            itemLoad: true,
            image: getImgUrl(item)
          })
        })
    } else {
      this.setState({
        itemLoad: true
      })
    }
  }

  render() {
    const spinner = <Spinner />
    const item = this.state.item
      ? <ItemView image={ this.state.image } 
                  item={ this.state.item } >
          {
            Children.map(
              this.props.children,
              // clone element with new options
              (child) => React.cloneElement(child, { item:this.state.item })
            )
          }
        </ItemView>
      : <ItemNot />
    return (
      <div className="item-details card">
        {this.state.itemLoad ? item : spinner}
      </div>
    )
  }
}

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