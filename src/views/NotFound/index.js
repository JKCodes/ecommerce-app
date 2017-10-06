import React from 'react'

import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  h3: {
    textAlign: 'center',
    marginTop: '5px',
    marginBottom: '0'
  }
})

const NotFound = () => (
  <div>
    <h3 className={css(styles.h3)}>The requested resource could not be found.</h3>
    <h3 className={css(styles.h3)}>Please note that some resources required the user to be logged in first</h3>
  </div>
)
export default NotFound;
