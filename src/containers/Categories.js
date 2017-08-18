import React, { Component } from 'react';
import { connect } from 'react-redux';
import CategoryItem from '../components/CategoryItem'

class Categories extends Component {
  handleOnClick = (e) => {
    alert(`In a future update, clicking on ${e.target.innerHTML} will load items from that category`)
  }

  render() {
    return (
      <div>
        {this.props.categories.map(category => <button onClick={this.handleOnClick} key={category.id}><CategoryItem category={category} /></button>)}
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