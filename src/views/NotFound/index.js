import React from 'react'

import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  h3: {
    marginTop: '5px',
    marginBottom: '0'
  }
})

const NotFound = () => (
  <div>
    <h3 className={css(styles.h3)}>The requested resource is unavailable due to one of the following reasons:</h3>
    <ol>
      <li>
        <h3>The requested resource is no longer available.</h3>
      </li>
      <li>
        <h3>The manually inputted resource is invalid</h3>
      </li>
      <li>
        <h3>The requested resource is only available to logged in users</h3>
      </li>
      <li>
        <h3>You are not authorized to access this resource under your current user privileges</h3>
      </li>
    </ol>
  </div>
)
export default NotFound;
