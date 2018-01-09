import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addItem } from '../actions/actions'
import { withRouter } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  h1: {
    textAlign: 'center'
  },

  form: {
    margin: '0 auto',
    width: '205px'
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

  textarea: {
    width: '200px',
    borderRadius: '5px',
    resize: "none"
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
    if (this.props.categories.length === 0) {
      this.props.history.push('/items')
      return (
        <div></div>
      )
    } else {
      var options = []

      for (var category in this.props.categories) {
        options.push(<option value={category.id}>{category.title}</option>)
      }

      return (
        <div>
          <h1 className={css(styles.h1)}>Create A New Item</h1>
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
              <label className={css(styles.label)} htmlFor="img_url">URL for Item</label>
              <input
                className={css(styles.input)}
                type="text"
                name="img_url"
                onChange={this.handleOnChange}
              />
            </div>
            <div>
              <label className={css(styles.label)} htmlFor="description">Item Description</label>
              <textarea
                className={css(styles.textarea)}
                type="text"
                rows="10"
                name="description"
                onChange={this.handleOnChange}
              >
              </textarea>
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
              <label className={css(styles.label)} htmlFor="Category">Category</label>    
              <select 
                name="category_id"
                value={this.state.category_id}
                onChange={this.handleOnChange}
              >
                {this.props.categories.map((category, index) => <option key={index} value={category.id}>{category.title}</option>)}
              </select>
            </div>

            <button className={css(styles.button)} type="submit">Create new Item</button>
          </form>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return { categories: state.categories }
}

export default withRouter(connect(mapStateToProps, { addItem })(ItemNew))