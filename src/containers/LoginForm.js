import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateLoginFormData } from '../redux/modules/LoginForm/actions';
import { login } from '../redux/modules/Auth/actions'
import { withRouter } from 'react-router-dom';

class LoginForm extends Component {

  handleOnChange = (e) => {
    const { name, value } = e.target;
    const currentLoginFormData = Object.assign({}, this.props.loginFormData, {
      [name]:value
    })
    this.props.updateLoginFormData(currentLoginFormData)
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    this.props.login(this.props.loginFormData, this.props.history)
  }

  render() {
    const { email, password } = this.props.loginFormData

    return (
      <form onSubmit={this.handleOnSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            onChange={this.handleOnChange}
            name="email"
            value={email}
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            onChange={this.handleOnChange}
            name="password"
            value={password}
          />
        </div>

        <button type="submit">Login</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loginFormData: state.loginFormData
  }
}

export default withRouter(connect(mapStateToProps, { 
  updateLoginFormData,
  login
})(LoginForm));