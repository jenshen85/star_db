import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator';

export default class ErrorBoundry extends Component {
  state = {
    hasError: false,
  }

  componentDidCatch() {
    this.setState({
      hasError: true
    })
  }

  render() {
    return !this.state.hasError ? this.props.children : <ErrorIndicator />
  }
}