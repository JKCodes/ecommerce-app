import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCategory } from '../actions/actions'
import { withRouter } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  h1: {
    textAlign: 'center'
  },

  form: {
    margin: '0 auto',
    width: '255px'
  },

  label: {
    display: 'block',
    paddingLeft: '10px',
    margin: '15px auto 5px'
  },

  input: {
    width: '250px',
    height: '20px',
    borderRadius: '5px'
  },

  button: {
    width: '250px',
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


class CategoryNew extends Component {

  constructor() {
    super()

    this.state = {
      title: '',
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
    this.props.addCategory(this.state, this.props.history)
  }

  render() {
    return (
      <div>
        <h1 className={css(styles.h1)}>Create A New Category</h1>
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
          <button className={css(styles.button)} type="submit">Create new Category</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { }
}

export default withRouter(connect(mapStateToProps, { addCategory })(CategoryNew))