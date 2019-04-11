import React, { Component, Fragment } from 'react';
import './item-details.css';
import Spinner from '../spinner';
import SWapiService from '../../services/swapi-services';
import ErrorButton from '../error-button';

export default class ItemDetails extends Component {
  swapiService = new SWapiService()

  state = {
    item: null,
    itemLoad: true,
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
    const { itemId } = this.props
    if(itemId) {
      this.swapiService
        .getPeople(itemId)
        .then((item) => {
          this.setState({
            item,
            itemLoad: true
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
                        ? <ItemView item={ this.state.item } />
                        : <ItemNot />
    return (
      <div className="item-details card">
        {this.state.itemLoad ? item : spinner}
      </div>
    )
  }
}

const ItemView = ({ item }) => {
  const {id, name, gender, birthYear, eyeColor} = item
  return (
    <Fragment>
      <img  className="item-details-image" alt=''
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

      <div className="card-body">
        <h4>{ name }</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{ gender }</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{ birthYear }</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{ eyeColor }</span>
          </li>
        </ul>
        <ErrorButton />
      </div>
    </Fragment>
  )
}

const ItemNot = () => {
  return <span>Select item from a list</span>
}