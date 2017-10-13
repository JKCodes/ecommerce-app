const initialState = []

export default (state = initialState, action) => {
  switch(action.type) {
    case 'GET_CATEGORIES_SUCCESS':
      return action.categories
    case 'ADD_NEW_CATEGORY_SUCCESS':
      state.push(action.category)
      state.sort(function(a, b) {
        return a.title > b.title
      })
      return state
    default:
      return state
  }
}