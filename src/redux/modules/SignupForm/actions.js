const API_URL = process.env.REACT_APP_API_URL;

export const updateSignupFormData = (signupFormData) => {
  return {
    type: 'UPDATED_FORM_DATA',
    signupFormData
  }
}

export const setUser = (user) => {
  return {
    type: 'AUTHENTICATION_SUCCESS',
    user
  }
}

export const createUser = (userData) => {
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
        if (!user.errors) {
          dispatch(setUser(user))
        } else {
          Object.keys(user.errors).forEach((key) => console.log(`${key} ${user.errors[key]}`))
        }
    })
    .catch(error => console.log(error))
  }
}