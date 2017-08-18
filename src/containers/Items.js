import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ItemCard from '../components/ItemCard'

import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  link: {
    display: 'block',
    textDecoration: 'none',
    width: '150px',
    fontSize: '1.3em',
    color: 'black',
    textAlign: 'center',
    margin: '0 auto',
    paddingTop: '5px',
    paddingBottom: '5px',
    border: '2px solid #444',
    borderRadius: '15px',
    background: 'cyan',
    color: "#555",
    boxShadow: '2px 2px 2px 2px #ccc',
    ':hover': {
      background: '#444',
      color: "cyan"
    }
  },

  listItem: {
    display: 'inline-block',
    textDecoration: 'none',
    color: 'black',
    textAlign: 'center',
    margin: '22px 1% 0px',
    width: '31%',
    background: '#fff',
    ':hover': {
      background: 'lightGray'
    },
    boxShadow: '1px 1px 2px 2px #ccc',
    borderRadius: '10%'
  }
})

class Items extends Component {
  render() {
    return (
      <div>
        <Link className={css(styles.link)} to={`/items/new`}>Add a new Item</Link>
        {this.props.items.map(item => <Link className={css(styles.listItem)} key={item.id} to={`/items/${item.id}`}><ItemCard item={item} /></Link>)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    items: state.items
  })
}

export default connect(mapStateToProps)(Items);