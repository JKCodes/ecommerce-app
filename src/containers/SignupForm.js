import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSignupFormData, createUser } from '../redux/modules/SignupForm/actions'

class SignupForm extends Component {

  handleOnChange = (e) => {
    const { name, value } = e.target;
    const currentSignupFormData = Object.assign({}, this.props.signupFormData, {
      [name]:value
    })
    this.props.updateSignupFormData(currentSignupFormData)
  }

  handleOnSubmit = (e) => {
    e.preventDefault()

    this.props.createUser(this.props.signupFormData)
  }

  render() {
    const { email, password, password_confirmation } = this.props.signupFormData
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

        <div>
          <label htmlFor="password_confirmation">Password Confirmation:</label>
          <input
            type="password"
            onChange={this.handleOnChange}
            name="password_confirmation"
            value={password_confirmation}
          />
        </div>

        <button type="submit">Create New Account</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    signupFormData: state.signupFormData
  }
}

export default connect(mapStateToProps, { 
  updateSignupFormData, 
  createUser
})(SignupForm);