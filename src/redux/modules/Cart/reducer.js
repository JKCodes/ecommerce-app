const initialState = []

export default (state = initialState, action) => {
  switch(action.type) {
    case 'GET_CART_SUCCESS':
      return action.cart
    default:
      return state
  }
}
