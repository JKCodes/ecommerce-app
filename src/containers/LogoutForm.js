import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../redux/modules/Auth/actions'
import { withRouter } from 'react-router-dom';

class LogoutForm extends Component {

  handleOnSubmit = (e) => {
    e.preventDefault()
    this.props.logout()
    this.props.history.push('/')
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <button type="submit">Yes, Log me Out!</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default withRouter(connect(mapStateToProps, { logout })(LogoutForm));