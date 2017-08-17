import React, { Component } from 'react';
import { connect } from 'react-redux';

import SignupForm from '../../containers/SignupForm';
import { signup } from '../../redux/modules/Auth/actions';

class Signup extends Component {

  render() {
    return (
      <div className="signup">
        <h3>Create an Account</h3>
        <SignupForm />
      </div>
    )
  }
}

export default Signup