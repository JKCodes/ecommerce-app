import React from 'react'

import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  center: {
    margin: '0 auto 40px',
    textAlign: 'center'
  },

  adjustH2: {
    marginTop: '10px',
    marginBottom: '0',
    fontSize: '1.1em'
  }
})

const Home = () => (
  <div>
    <h1 className={css(styles.center)}>Welcome to Ecommerce App!</h1>
    <h2 className={css(styles.adjustH2)}>Feel Free to browse through the Items</h2>
    <h2 className={css(styles.adjustH2)}>You do not have to be logged in to view the items</h2>
    <h2 className={css(styles.adjustH2)}>You must, however, be logged in to access your cart and to add items to your cart</h2>
    <h2 className={css(styles.adjustH2)}>So, click on any of the Navigational links above to get started!</h2>
  </div>
)
export default Home