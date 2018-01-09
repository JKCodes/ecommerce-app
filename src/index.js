import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'
import store from './store'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom'
import {
  Category, CategoryNew, Home, Item, ItemNew, ItemShow,
  Login, Logout, NotFound, Signup
} from './layout'
import { Header, Footer } from './components/containers'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  
  document.getElementById('root')
)
registerServiceWorker()
 