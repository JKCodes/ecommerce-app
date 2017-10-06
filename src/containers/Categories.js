import React, { Component } from 'react'
import { connect } from 'react-redux'
import CategoryItem from '../components/CategoryItem'
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
  }
})

class Categories extends Component {
  handleOnClick = (e) => {
    alert(`In a future update, clicking on ${e.target.innerHTML} will load items from that category`)
  }

  render() {
    return (
      <div>
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