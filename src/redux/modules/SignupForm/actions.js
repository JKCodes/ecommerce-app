const API_URL = process.env.REACT_APP_API_URL;

export const updateSignupFormData = (signupFormData) => {
  return {
    type: 'UPDATED_FORM_DATA',
    signupFormData
  }
}

export const createUser = (userData) => {
  console.log(userData)
  return dispatch => {
    return fetch(`${API_URL}/users`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user: userData })
    })
    .then(response => response.json())
    .then(user => {
        debugger
    })
    .catch(error => console.log(error))
  }
}