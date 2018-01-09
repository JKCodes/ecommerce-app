import React from 'react'

const ItemCard = ({ item }) => (
  <div>
    <h3>{item.title}</h3>
    <p>Price: ${item.price}</p>
    <p>Inventory: {item.inventory}</p>
    <p>Description: {item.description}</p>
  </div>
)

export default ItemCard