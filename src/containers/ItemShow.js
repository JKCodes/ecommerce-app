import React from 'react';
import { connect } from 'react-redux';

const ItemShow = ({ item }) => (
  <div>
    <h2>{item.title}</h2>
    <p>Price: ${item.price}</p>
    <p>Inventory: {item.inventory}</p>
    <button>Add to Cart - future plans</button>
  </div>
)


const mapStateToProps = (state, ownProps) => {
  console.log(state.items)
  const item = state.items.find(item => item.id === +ownProps.match.params.itemId)

  if (item) {
    return { item }
  } else {
    return { item: {} }
  }
};

export default connect(mapStateToProps)(ItemShow);