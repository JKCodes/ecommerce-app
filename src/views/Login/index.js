import React, { Component } from 'react';

import LoginForm from '../../containers/LoginForm';

class Login extends Component {

  render() {
    return (
      <div className="login">
        <h3>Login below</h3>
        <LoginForm />
      </div>
    )
  }
}

export default Login