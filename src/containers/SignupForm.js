import React, { Component } from 'react';
import { connect } from 'react-redux';

class SignupForm extends Component {

  render() {
    const { email, password, password_confirmation } = this.props.signupFormData
    return (
      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={email}
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={password}
          />
        </div>

        <div>
          <label htmlFor="password_confirmation">Password Confirmation:</label>
          <input
            type="password"
            name="password_confirmation"
            value={password_confirmation}
          />
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    signupFormData: state.signupFormData
  }
}

export default connect(mapStateToProps)(SignupForm);