import React, { Component } from 'react';
import './item-list.css';
import Spinner from '../spinner';

import SWapiService from '../../services/swapi-services'

export default class ItemList extends Component {
  swapiService = new SWapiService()

  state = {
    peopleList: null
  }

  componentDidMount() {
    this.swapiService
      .getAllPeople()
      .then((peopleList) => {
        this.setState({peopleList})
      })
  }

  RenderItems(arr) {
    return arr.map((person) => {
      return (
        <li className="list-group-item"
            key={person.id}
            onClick={ () => this.props.onItemSelected(person.id) }>
          {person.name}
        </li>
      )
    })
  }

  render() {
    const { peopleList } = this.state
    return (
      <ul className="item-list list-group">
        { peopleList ? this.RenderItems(peopleList) : <Spinner /> }
      </ul>
    )
  }
}
