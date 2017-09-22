import React, { Component } from 'react';
import { connect } from 'react-redux';

class Cart extends Component {
  render() {
    return (
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    cart: []
  })
}

export default connect(mapStateToProps)(Cart);