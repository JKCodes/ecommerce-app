import React, { Component } from 'react';
import { connect } from 'react-redux';

class ItemShow extends Component {
  render() {
    return (
      <div>
        Hi
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const item = state.items.find(item => item.id === ownProps.match.params.itemId)

  if (item) {
    return { item }
  } else {
    return { item: {} }
  }
};

export default connect(mapStateToProps)(ItemShow);