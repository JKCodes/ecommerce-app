import React, { Component } from 'react';

import Categories from '../../containers/Categories';

class Category extends Component {

  render() {
    return (
      <div className="category">
        <h3>Categories</h3>
        <Categories />
      </div>
    )
  }
}

export default Category