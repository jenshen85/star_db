import React from 'react'

import { SwapiServiceConsumer } from '../swapi-service-context/';

const withApiService = (Wrapped, mapMethodsToProps) => (props) => {
  return (
    <SwapiServiceConsumer>
      { (apiService) => {
          const serviceProps = mapMethodsToProps(apiService)
          return <Wrapped {...props}  { ...serviceProps } />
        } 
      }
    </SwapiServiceConsumer>
  )
}

export default withApiService;