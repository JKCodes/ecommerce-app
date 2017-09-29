import 'isomorphic-fetch';
import { reset } from 'redux-form'

const API_URL = process.env.REACT_APP_API_URL;

export const authenticationRequest = () => {
  return {
    type: 'AUTHENTICATION_REQUEST'
  }
}

export const setCurrentUser = (user) => {
  return {
    type: 'AUTHENTICATION_SUCCESS',
    user
  }
}

export const logout = () => {
  localStorage.removeItem('e.shop.token')
  return {
    type: 'RESET_SESSION'
  }
}

export const fetchCurrentUser = () => {
  const token = localStorage.getItem('e.shop.token')
    if (token) {
      return dispatch => {
        fetch(`${API_URL}/auth/fetch`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ token: token })
        })
        .then(response => response.json())
        .then(userData => {
          dispatch(setCurrentUser(userData));
        })
      }
    } else {
      return {
        type: "@@init"
      }
    }
}

const authenticateDispatcher = (userDetails, history, url) => {
  return dispatch => {
    dispatch(authenticationRequest())
    return fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user: userDetails })
    })
    .then(response => response.json())
    .then(body => {
      if (!body.errors) {
        localStorage.setItem('e.shop.token', body.token);
        dispatch(setCurrentUser(body.user));
        dispatch(reset('login'));
        history.push('/')
      } else {
          Object.keys(body.errors).forEach((key) => console.log(`${key} ${body.errors[key]}`))
      }
    })
  }
}

export const login = (userDetails, history) => {
  return authenticateDispatcher(userDetails, history, `${API_URL}/auth`)
}

export const signup = (userDetails, history) => {
  return authenticateDispatcher(userDetails, history, `${API_URL}/users`)
}