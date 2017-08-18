const initialState = {
  email: '',
  password: ''
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATED_LOGIN_FORM_DATA':
      return action.loginFormData
    default:
      return state;
  }
}