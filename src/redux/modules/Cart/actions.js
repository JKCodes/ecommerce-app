import 'isomorphic-fetch'

const API_URL = process.env.REACT_APP_API_URL

const setCart = (cart) => {
  return {
    type: 'GET_CART_SUCCESS',
    cart
  }
}
