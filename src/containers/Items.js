import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllItems } from '../redux/modules/Items/actions'
import ItemCard from '../components/ItemCard'

class Items extends Component {

  componentDidMount() {
    this.props.getAllItems()
  }

  handleOnClick = (e) => {
    console.log("hi")
  }

  render() {
    return (
      <div>
        <Link to={`/items/new`}>Add a new Item</Link>
        {this.props.items.map(item => <Link key={item.id} to={`/items/${item.id}`}><ItemCard item={item} /></Link>)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    items: state.items
  })
}

export default connect(mapStateToProps, { getAllItems })(Items);