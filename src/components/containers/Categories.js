import React, { Component } from 'react'
import { connect } from 'react-redux'
import CategoryItem from '../components/CategoryItem'
import { Link } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  button: {
    textAlign: 'center',
    margin: '1%',
    width: '31%',
    height: '65px',
    background: '#fff',
    ':hover': {
      background: 'lightGray'
    },
    boxShadow: '1px 1px 2px 2px #ccc',
    borderRadius: '10%'
  },

  link: {
    display: 'block',
    textDecoration: 'none',
    width: '200px',
    fontSize: '1.3em',
    textAlign: 'center',
    margin: '0 auto 20px auto',
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
  }
})

class Categories extends Component {
  handleOnClick = (e) => {
    alert(`In a future update, clicking on ${e.target.innerHTML} will load items from that category`)
  }

  render() {
    return (
      <div>
        <Link className={css(styles.link)} to={`/categories/new`}>Add a new category</Link>
        {this.props.categories.map(category => <button className={css(styles.button)} onClick={this.handleOnClick} key={category.id}><CategoryItem category={category} /></button>)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    categories: state.categories
  })
}

export default connect(mapStateToProps)(Categories)