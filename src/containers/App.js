import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite';

import Home from '../views/Home';
import Signup from '../views/Signup';
import NotFound from '../views/NotFound';

const styles = StyleSheet.create({
  navbar: {
    width: '100%',
    background: '#18121e',
    padding: '6px'
  },

  navlink: {
    textDecoration: 'none',
    padding: '6px',
    color: 'white',
    ':hover': {
      background: '#fff',
      color: '#18121e'
    }
  }
})

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="navbar">
            <div className={css(styles.navbar)}>
              <NavLink 
                className={css(styles.navlink)}
                to="/">
                Home
              </NavLink>
              <NavLink 
                className={css(styles.navlink)}
                to="/signup">
                Signup
              </NavLink>
            </div>
          </div>
          <hr />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
