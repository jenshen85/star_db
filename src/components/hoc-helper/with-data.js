import React, { Component } from 'react';
import Spinner from '../spinner';

const withData = (View, getData) => class ItemListWrap extends Component {
  state = {
    data: null
  }

  componentDidMount() {
    getData()
      .then((data) => {
        this.setState({data})
      })
  }

  render() {
    const {data} = this.state
    return (
      <React.Fragment>
        { data ? <View { ...this.props } data={ data } /> : <Spinner /> }
      </React.Fragment>
    )
  } 
}

export default withData;