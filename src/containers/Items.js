import React, { Component } from 'react';
import { connect } from 'react-redux';
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
        {this.props.items.map(item => <ItemCard key={item.id} onClick={this.handleOnClick} item={item} />)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    items: state.item
  })
}

export default connect(mapStateToProps, { getAllItems })(Items);