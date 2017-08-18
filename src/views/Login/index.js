import React, { Component } from 'react';

import LoginForm from '../../containers/LoginForm';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  h1: {
    textAlign: 'center'
  }
})

class Login extends Component {

  render() {
    return (
      <div className="login">
        <h1 className={css(styles.h1)}>Login below</h1>
        <LoginForm />
      </div>
    )
  }
}

export default Login