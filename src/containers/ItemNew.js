import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../redux/modules/Items/actions'
import { updateNewItemFormData } from '../redux/modules/NewItemForm/actions'
import { withRouter } from 'react-router-dom';

class ItemNew extends Component {

  handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(this.props.newItemFormData)
    const currentNewItemFormData = Object.assign({}, this.props.newItemFormData, {
      [name]:value
    })
    console.log(currentNewItemFormData)

    this.props.updateNewItemFormData(currentNewItemFormData)
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    this.props.addItem(this.props.newItemFormData, this.props.history)
  }

  render() {
    return (
      <div>
        <h2>Create a new Item</h2>
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label htmlFor="title">Name:</label>
            <input
              type="text"
              name="title"
              onChange={this.handleOnChange}
            />
          </div>
          <div>  
            <label htmlFor="inventory">Iventory:</label>
            <input
              type="number"
              name="inventory"
              onChange={this.handleOnChange}
            />
          </div>
          <div>  
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              name="price"
              min="0.01"
              step="0.01"
              onChange={this.handleOnChange}
            />
          </div>
          <div>  
            <label htmlFor="Category Id">Category Id:</label>
            <input
              type="number"
              name="category_id"
              min="1"
              max="22"
              step="1"
              onChange={this.handleOnChange}
            />
          </div>
          <button type="submit">Create new Item</button>
        </form>

        <h3>Category Id Reference</h3>
        <ol>
          <li>Food</li>
          <li>Clothing</li>
          <li>Electronics</li>
          <li>Movies</li>
          <li>Music</li>
          <li>Books</li>
          <li>Office</li>
          <li>Furniture</li>
          <li>Appliances</li>
          <li>Shoes</li>
          <li>Jewelry</li>
          <li>Toys</li>
          <li>Video Games</li>
          <li>Pharmacy</li>
          <li>Household</li>
          <li>Health and Beauty</li>
          <li>Sports</li>
          <li>Fitness</li>
          <li>Outdoors</li>
          <li>Auto</li>
          <li>Crafts</li>
          <li>Party Supplies</li>
        </ol>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    newItemFormData: state.newItemFormData
  }
}

export default withRouter(connect(mapStateToProps, { addItem, updateNewItemFormData })(ItemNew));