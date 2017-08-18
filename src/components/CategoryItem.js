import React from 'react';

import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  span: {
    fontSize: '1.5em'
  }
})

const CategoryItem = ({ category }) => (
  <div key={category.id} className={css(styles.span)}>
    <span>{category.title}</span>
  </div>
  )

export default CategoryItem;