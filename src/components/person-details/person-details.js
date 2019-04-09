import React, { Component, Fragment } from 'react';
import './person-details.css';
import Spinner from '../spinner';
import SWapiService from '../../services/swapi-services';

export default class PersonDetails extends Component {
  swapiService = new SWapiService()

  state = {
    person: null,
    personLoad: true
  }

  componentDidMount() {
    this.updatePerson()
  }

  componentDidUpdate(prevProps) {
    if(this.props.personId !== prevProps.personId) {
      this.updatePerson()
    }
  }

  updatePerson() {
    this.setState({personLoad: false})
    const { personId } = this.props
    if(personId) {
      this.swapiService
        .getPeople(personId)
        .then((person) => {
          this.setState({
            person,
            personLoad: true
          })
        })
    } else {
      this.setState({
        personLoad: true
      })
    }
  }

  render() {
    const spinner = <Spinner />
    const person = this.state.person
                        ? <PersonView person={ this.state.person } />
                        : <PersonNot />
    return (
      <div className="person-details card">
        {this.state.personLoad ? person : spinner}
      </div>
    )
  }
}

const PersonView = ({ person }) => {
  const {id, name, gender, birthYear, eyeColor} = person
  return (
    <Fragment>
      <img  className="person-image" alt=''
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
      </div>
    </Fragment>
  )
}

const PersonNot = () => {
  return <span>Select a person  from a list</span>
}