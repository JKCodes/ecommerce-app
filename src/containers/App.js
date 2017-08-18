import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite';
import { fetchCurrentUser } from '../redux/modules/Auth/actions'
import Home from '../views/Home';
import Signup from '../views/Signup';
import NotFound from '../views/NotFound';
import Login from '../views/Login';
import Logout from '../views/Logout';
import Category from '../views/Category';
import Item from '../views/Item';

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

  componentDidMount() {
    this.props.fetchCurrentUser()
  }

  render() {
    const loggedIn = Object.keys(this.props.auth.currentUser).length !== 0
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
              { !loggedIn &&  
                <NavLink 
                  className={css(styles.navlink)}
                  to="/signup">
                  Signup
                </NavLink>
              }
              { !loggedIn &&  
                <NavLink 
                  className={css(styles.navlink)}
                  to="/login">
                  Login
                </NavLink>
              }
              { loggedIn &&
                <NavLink 
                  className={css(styles.navlink)}
                  to="/logout">
                  Logout
                </NavLink>
              }
              <NavLink 
                className={css(styles.navlink)}
                to="/categories">
                Categories
              </NavLink>
              <NavLink 
                className={css(styles.navlink)}
                to="/items">
                Items
              </NavLink>
            </div>
          </div>
          <hr />
          <Switch>
            <Route exact path="/" component={Home} />
            { !loggedIn && <Route exact path="/signup" component={Signup} /> }
            { !loggedIn && <Route exact path="/login" component={Login} /> }
            { loggedIn && <Route exact path="/logout" component={Logout} /> }
            <Route exact path="/categories" component={Category} />
            <Route exact path="/items" component={Item} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    auth: state.auth
  })
}

export default connect(mapStateToProps, { fetchCurrentUser })(App);
