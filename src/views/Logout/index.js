import React, { Component } from 'react'

import LogoutForm from '../../containers/LogoutForm'

import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  h3: {
    width: '65%',
    margin: '0 auto 20px',
    textAlign: 'center'
  }
})

class Logout extends Component {

  render() {
    return (
      <div className="logout">
        <h3 className={css(styles.h3)}>Are you sure you want to logout?</h3>
        <LogoutForm />
      </div>
    )
  }
}

export default Logout