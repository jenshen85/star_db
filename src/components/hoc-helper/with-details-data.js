import React, { Component } from 'react';

const withDetailsData = (View) => class DetailsWrapp extends Component {
  state = {
    data: null,
    dataLoad: true,
    dataImage: null,
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
    this.setState({dataLoad: false})
    const { itemId, getImgUrl, getData } = this.props
    if(itemId) {
      getData(itemId)
        .then((data) => {
          this.setState({
            data,
            dataLoad: true,
            dataImage: getImgUrl(data)
          })
        })
    } else {
      this.setState({
        dataLoad: true
      })
    }
  }
  render() {
    const {data, dataLoad, dataImage} = this.state
    return <View {...this.props} data={ data } dataLoad={ dataLoad } dataImage={ dataImage } />
  }
}

export default withDetailsData;