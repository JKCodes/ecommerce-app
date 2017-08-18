import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../redux/modules/Items/actions'

class ItemNew extends Component {
  render() {
    return (
      <div>
        Hi
      </div>
    )
  }
}

export default connect(null, { addItem })(ItemNew);