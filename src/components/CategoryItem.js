import React from 'react';

const CategoryItem = ({ category }) => (
  <div key={category.id} className="category-item">
    <span>{category.title}</span>
  </div>
  )

export default CategoryItem;