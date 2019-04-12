import React, { Component } from 'react';

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
        { <View { ...this.props } data={ data } /> }
      </React.Fragment>
    )
  } 
}

export default withData;