import constants from '../constants';
import { APIManager } from '../utils';

const getRequest = (path, params, actionType) => {
	return (dispatch) => 
		APIManager.get(path, params)
		.then(response => {

			const payload = response.results || response.result || response.user

			dispatch({
				type: actionType,
				payload: payload,
				params: params
			})

			return response
		})
		.catch(err => {

			throw err
		})
}

const postRequest = (path, params, actionType) => {
	return (dispatch) => 
		APIManager.post(path, params)
		.then(response => {
			const payload = response.results || response.result || response.user

			dispatch({
				type: actionType,
				payload: payload,
				params: params
			})

			return response
		})
		.catch(err => {
			throw err
		})
}



const API_URL = process.env.REACT_APP_API_URL

// Auth

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
          dispatch(setCurrentUser(userData))
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
        localStorage.setItem('e.shop.token', body.token)
        dispatch(setCurrentUser(body.user))
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

// Categories

const setCategories = (categories) => {
  return {
    type: 'GET_CATEGORIES_SUCCESS',
    categories
  }
}

export const getAllCategories = () => {
  return dispatch => {
    return fetch(`${API_URL}/categories`)
    .then(response => response.json())
    .then(categories => dispatch(setCategories(categories)))
    .catch(error => console.log(error))
  }
}

export const addCategory = (categoryDetails, history) => {
  return dispatch => {
    return fetch(`${API_URL}/categories`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ category: categoryDetails })
    })
    .then(response => response.json())
    .then(body => {
      if (!body.error) {
        console.log(body)
        dispatch(addNewCategory(body))
        history.push('/categories')
      } else {
          Object.keys(body.error).forEach((key) => console.log(`${key} ${body.error[key]}`))
      }
    })
  }}

const addNewCategory = (category) => {
  return {
    type: 'ADD_NEW_CATEGORY_SUCCESS',
    category
  }
}

// Items

const setItems = (items) => {
  return {
    type: 'GET_ITEMS_SUCCESS',
    items
  }
}

export const addItem = (itemDetails, history) => {
  return dispatch => {
    return fetch(`${API_URL}/items`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ item: itemDetails })
    })
    .then(response => response.json())
    .then(body => {
      if (!body.error) {
        dispatch(addNewItem(body))
        history.push('/items')
      } else {
          Object.keys(body.error).forEach((key) => console.log(`${key} ${body.error[key]}`))
      }
    })
  }}

const addNewItem = (item) => {
  return {
    type: 'ADD_NEW_ITEM_SUCCESS',
    item
  }
}

export const getAllItems = () => {
  return dispatch => {
    return fetch(`${API_URL}/items`)
    .then(response => response.json())
    .then(items => dispatch(setItems(items)))
    .catch(error => console.log(error))
  }
}

// Cart

const setCart = (cart) => {
  return {
    type: 'GET_CART_SUCCESS',
    cart
  }
}