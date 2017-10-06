import React, { Component } from 'react'

import Categories from '../../containers/Categories'

import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  h1: {
    textAlign: 'center',
    marginTop: '5px',
    marginBottom: '5px'
  }
})

class Category extends Component {

  render() {
    return (
      <div className="category">
        <h1 className={css(styles.h1)}>Categories</h1>
        <Categories />
      </div>
    )
  }
}

export default Category