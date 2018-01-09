import React, { Component } from 'react'

import SignupForm from '../../containers/SignupForm'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  h1: {
    textAlign: 'center'
  }
})


class Signup extends Component {

  render() {
    return (
      <div className="signup">
        <h1 className={css(styles.h1)}>Create an Account</h1>
        <SignupForm />
      </div>
    )
  }
}

export default Signup