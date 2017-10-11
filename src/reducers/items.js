const initialState = []

export default (state = initialState, action) => {
  switch(action.type) {
    case 'GET_ITEMS_SUCCESS':
      return action.items
    case 'ADD_NEW_ITEM_SUCCESS':
      return state.concat(action.item)
    default:
      return state
  }
}