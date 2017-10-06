import 'isomorphic-fetch'

const API_URL = process.env.REACT_APP_API_URL

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