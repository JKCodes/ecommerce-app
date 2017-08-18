const initialState = []

export default (state = initialState, action) => {
  switch(action.type) {
    case 'GET_CATEGORIES_SUCCESS':
      return action.categories;
    default:
      return state;
  }
}