import React from 'react';
import { withRouter } from 'react-router-dom';
import './people-page.css';

import { PersonList, PersonDetails } from '../sw-components';
import ErrorBoundry from '../error-boundry';
import Row from '../row';

const PeoplePage = ({ history, match }) => {
  const { id } = match.params;
  const personList = <PersonList onItemSelected={(id) => history.push(id)} />;
  const personDetails = <PersonDetails itemId={ id } />;

  return (
    <ErrorBoundry>
      <Row left={ personList } right={ personDetails }/>
    </ErrorBoundry>
  )
}

export default withRouter(PeoplePage);