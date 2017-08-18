import 'isomorphic-fetch';
import { reset } from 'redux-form'

const API_URL = process.env.REACT_APP_API_URL;

const setItems = (items) => {
  return {
    type: 'GET_ITEMS_SUCCESS',
    items
  }
}

export const addItem = () => {
  alert('adding new item!')
}

export const getAllItems = () => {
  return dispatch => {
    return fetch(`${API_URL}/items`)
    .then(response => response.json())
    .then(items => dispatch(setItems(items)))
    .catch(error => console.log(error))
  }
}