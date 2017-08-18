const initialState = []

export default (state = initialState, action) => {
  switch(action.type) {
    case 'TEMP':
      return state
    default:
      return state;
  }
}