import React, { Component } from 'react';
import { connect } from 'react-redux';

import CategoryItem from '../components/CategoryItem'


class Categories extends Component {

  render() {
    return (
      <div>
        {this.props.categories.map(category => <CategoryItem key={category.id} category={category} />)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    categories: state.categories
  })
}

export default connect(mapStateToProps)(Categories);