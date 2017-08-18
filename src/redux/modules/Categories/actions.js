import 'isomorphic-fetch';
import { reset } from 'redux-form'

const API_URL = process.env.REACT_APP_API_URL;

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