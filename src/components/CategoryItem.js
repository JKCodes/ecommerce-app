import React from 'react';

const CategoryItem = ({ category }) => (
  <div key={category.id} className="category-item">
    <h2>{category.name}</h2>
  </div>
  )

export default CategoryItem;