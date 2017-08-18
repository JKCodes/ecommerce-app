import React from 'react';

const ItemCard = ({ item }) => (
  <div>
    <h3>{item.name}</h3>
    <p>Price: ${item.price}</p>
    <p>Inventory: ${item.Inventory}</p>
  </div>
)

export default ItemCard