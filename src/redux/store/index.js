import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import { reducer as form } from 'redux-form';
import auth from '../modules/Auth/reducer';
import signupFormData from '../modules/SignupForm/reducer';
import loginFormData from '../modules/LoginForm/reducer';
import categories from '../modules/Categories/reducer';
import items from '../modules/Items/reducer'

const reducers = combineReducers({
  form,
  auth,
  signupFormData,
  loginFormData,
  categories,
  items
})
const middleware = [thunk]

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
)