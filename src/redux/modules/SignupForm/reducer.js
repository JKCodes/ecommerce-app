const initialState = {
  email: '',
  password: '',
  password_confirmation: ''
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATED_FORM_DATA':
      return action.signupFormData
    default:
      return state;
  }
}