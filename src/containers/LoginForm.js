import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateLoginFormData } from '../redux/modules/LoginForm/actions';

class LoginForm extends Component {

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

export default connect(mapStateToProps, { 
  updateLoginFormData
})(LoginForm);