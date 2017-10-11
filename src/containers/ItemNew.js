import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addItem } from '../actions/actions'
import { withRouter } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  h1: {
    textAlign: 'center'
  },

  mainContainer: {
    overflow: 'hidden',
    padding: '40px'
  },

  form: {
    float: 'left'
  },

  reference: {
    float: 'right'
  },

  label: {
    display: 'block',
    paddingLeft: '10px',
    margin: '15px auto 5px'
  },

  input: {
    width: '200px',
    height: '20px',
    borderRadius: '5px'
  },

  button: {
    width: '200px',
    fontSize: '1.3em',
    textAlign: 'center',
    margin: '30px auto',
    paddingTop: '10px',
    paddingBottom: '10px',
    border: '2px solid blue',
    borderRadius: '15px',
    background: 'blue',
    color: "#fff",
    boxShadow: '2px 2px 2px 2px #ccc',
    ':hover': {
      background: '#fff',
      color: "blue"
    }
  }
})


class ItemNew extends Component {

  constructor() {
    super()

    this.state = {
      title: '',
      inventory: '',
      price: '',
      category_id: ''
    }
  }

  handleOnChange = (e) => {
    const { name, value } = e.target
    
    this.setState({
      [name]:value
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    this.props.addItem(this.state, this.props.history)
  }

  render() {
    return (
      <div>
        <h1 className={css(styles.h1)}>Create a new Item</h1>
        <div className={css(styles.mainContainer)}>
          <form className={css(styles.form)} onSubmit={this.handleOnSubmit}>
            <div>
              <label className={css(styles.label)} htmlFor="title">Name</label>
              <input
                className={css(styles.input)}
                type="text"
                name="title"
                onChange={this.handleOnChange}
              />
            </div>
            <div>  
              <label className={css(styles.label)} htmlFor="inventory">Inventory</label>
              <input
                className={css(styles.input)}
                type="number"
                name="inventory"
                onChange={this.handleOnChange}
              />
            </div>
            <div>  
              <label className={css(styles.label)} htmlFor="price">Price</label>
              <input
                className={css(styles.input)}
                type="number"
                name="price"
                min="0.01"
                step="0.01"
                onChange={this.handleOnChange}
              />
            </div>
            <div>  
              <label className={css(styles.label)} htmlFor="Category Id">Category Id</label>
              <input
                className={css(styles.input)}
                type="number"
                name="category_id"
                min="1"
                max="22"
                step="1"
                onChange={this.handleOnChange}
              />
            </div>
            <button className={css(styles.button)} type="submit">Create new Item</button>
          </form>
          <div className={css(styles.reference)}>
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
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { }
}

export default withRouter(connect(mapStateToProps, { addItem })(ItemNew))