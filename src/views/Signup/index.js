import React, { Component } from 'react';

import SignupForm from '../../containers/SignupForm';

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