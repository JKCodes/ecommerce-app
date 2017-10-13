import React from 'react'
import { connect } from 'react-redux'

import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  h1: {
    textAlign: 'center'
  },

  p: {
    textAlign: 'center',
    fontSize: '1.2em',
    marginBottom: '2px',
    marginTop: '2px'
  },

  button: {
    display: 'block',
    textDecoration: 'none',
    width: '150px',
    fontSize: '1.3em',
    textAlign: 'center',
    margin: '0 auto',
    paddingTop: '5px',
    paddingBottom: '5px',
    border: '2px solid #444',
    borderRadius: '15px',
    background: 'magenta',
    color: "#555",
    marginTop: "20px",
    boxShadow: '2px 2px 2px 2px #ccc',
    ':hover': {
      background: '#444',
      color: "magenta"
    }
  }
})

const ItemShow = ({ item }) => (
  <div>
    <h1 className={css(styles.h1)}>{item.title}</h1>
    <p className={css(styles.p)}>Price: ${item.price}</p>
    <p className={css(styles.p)}>Inventory: {item.inventory}</p>
    <button className={css(styles.button)}>Add to Cart</button>
  </div>
)


const mapStateToProps = (state, ownProps) => {
  const item = state.items.find(item => item.id === +ownProps.match.params.itemId)

  if (item) {
    return { item }
  } else {
    return { item: {} }
  }
}

export default connect(mapStateToProps)(ItemShow)