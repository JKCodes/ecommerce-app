import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux'
import thunk from 'redux-thunk'
import {
  authReducer,
  categoriesReducer,
  itemsReducer,
  cartReducer
} from '../reducers'

var store;
export default {
  configureStore: (initial) => {
    const reducers = combineReducers({
      form,
      auth,
      categories,
      items,
      cart
    })

    store = createStore(
      reducers,
      initial,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
      applyMiddleware(thunk)
    )

    return store
  },

  currentStore: () => {
    return store
  }
}
