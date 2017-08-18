const initialState = {
  title: '',
  inventory: '',
  price: '',
  category_id: ''
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATED_NEW_ITEM_DATA':
      return action.newItemFormData
    default:
      return state;
  }
}