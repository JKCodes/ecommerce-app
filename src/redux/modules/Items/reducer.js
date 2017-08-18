const initialState = []

export default (state = initialState, action) => {
  switch(action.type) {
    case 'GET_ITEMS_SUCCESS':
      return action.items;
    default:
      return state;
  }
}