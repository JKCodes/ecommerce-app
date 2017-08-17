import 'isomorphic-fetch';
import { reset, SubmissionError } from 'redux-form'

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
          // dispatch(setCurrentUser(userData));
        })
      }
    } else {
      return {
        type: "@@init"
      }
    }
}

export const signup = (userDetails, history) => {
  return dispatch => {
    dispatch(authenticationRequest())
    return fetch(`${API_URL}/users`, {
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
        const slug = body.user.email.split('@')[0];
        localStorage.setItem('e.shop.token', body.token);
        dispatch(setCurrentUser(body.user));
        dispatch(reset('signup'));
        history.replace(`/users/${slug}/profile`);        
      } else {
          Object.keys(body.errors).forEach((key) => console.log(`${key} ${body.errors[key]}`))
      }
    })
    .catch(err => {
      throw new SubmissionError(err)
    })
  }
}