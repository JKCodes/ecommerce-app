import React, { Component } from 'react';

import Items from '../../containers/Items';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  h1: {
    textAlign: 'center',
    marginTop: '5px',
    marginBottom: '5px'
  }
})

class Item extends Component {

  render() {
    return (
      <div className="item">
        <h1 className={css(styles.h1)}>Items</h1>
        <Items />
      </div>
    )
  }
}

export default Item