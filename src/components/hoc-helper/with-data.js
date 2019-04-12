import React, { Component } from 'react';

const withData = (View) => class ItemListWrap extends Component {
  state = {
    data: null
  }

  componentDidMount() {
    this.props
      .getData()
      .then((data) => {
        this.setState({data})
      })
  }

  render() {
    const {data} = this.state
    return <View { ...this.props } data={ data } />
  } 
}

export default withData;