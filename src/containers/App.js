import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite'
import { fetchCurrentUser, getAllItems, getAllCategories } from '../actions/actions'
import Home from '../views/Home'
import Signup from '../views/Signup'
import NotFound from '../views/NotFound'
import Login from '../views/Login'
import Logout from '../views/Logout'
import Category from '../views/Category'
import CategoryNew from './CategoryNew'
import Item from '../views/Item'
import ItemNew from './ItemNew'
import ItemShow from './ItemShow'

const styles = StyleSheet.create({
  navbar: {
    position: 'fixed',
    top: '0',
    left: '0',
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
  },

  logout: {
    position: 'absolute',
    right: '24px',
    top: '0'
  },

  login: {
    position: 'absolute',
    right: '24px',
    top: '0'
  },

  signup: {
    position: 'absolute',
    right: '80px',
    top: '0'
  },

  mainContainer: {
    width: '75%',
    padding: '30px 50px',
    margin: '40px auto',
    boxShadow: '3px 3px 5px 6px #ccc'
  }
})

class App extends Component {

  componentDidMount() {
    this.props.fetchCurrentUser()
    this.props.getAllCategories()
    this.props.getAllItems()
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
                  className={css(styles.navlink, styles.signup)}
                  to="/signup">
                  Signup
                </NavLink>
              }
              { !loggedIn &&  
                <NavLink 
                  className={css(styles.navlink, styles.login)}
                  to="/login">
                  Login
                </NavLink>
              }
              { loggedIn &&
                <NavLink 
                  className={css(styles.navlink, styles.logout)}
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
          <div className={css(styles.mainContainer)}>
            <Switch>
              <Route exact path="/" component={Home} />
              { !loggedIn && <Route exact path="/signup" component={Signup} /> }
              { !loggedIn && <Route exact path="/login" component={Login} /> }
              { loggedIn && <Route exact path="/logout" component={Logout} /> }
              <Route exact path="/categories" component={Category} />
              { loggedIn && <Route exact path="/categories/new" component={CategoryNew} /> }
              <Route exact path="/items" component={Item} />
              { loggedIn && <Route exact path="/items/new" component={ItemNew} /> }
              <Route exact path="/items/:itemId" component={ItemShow} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    auth: state.auth
  })
}

export default connect(mapStateToProps, { fetchCurrentUser, getAllCategories, getAllItems })(App)
