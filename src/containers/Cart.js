import React, { Component } from 'react'
import { connect } from 'react-redux'

class Cart extends Component {
  render() {
    return (
      <div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    cart: []
  })
}

export default connect(mapStateToProps)(Cart)