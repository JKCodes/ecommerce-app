import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../redux/modules/Auth/actions'
import { withRouter } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  button: {
    display: 'block',
    width: '65%',
    height: '30px',
    margin: '0 auto',
    ':hover': {
      background: 'lightgray',
    },
    boxShadow: '1px 1px 1px 1px #ccc'
  }
})

class LogoutForm extends Component {

  handleOnSubmit = (e) => {
    e.preventDefault()
    this.props.logout()
    this.props.history.push('/')
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <button className={css(styles.button)} type="submit">Yes, Log me Out!</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default withRouter(connect(mapStateToProps, { logout })(LogoutForm));