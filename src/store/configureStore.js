import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import rootReducer from './reducers'

const configureStore = () => {
  const initialState = loadState()

  const middleware = [thunk]
  const composableMiddlewares = [applyMiddleware(...middleware)]

  // Inject development tools
  if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
    composableMiddlewares.push(window.devToolsExtension ? window.devToolsExtension() : f => f)
  }

  const middlewares = compose(...composableMiddlewares)

  const store = createStore(
    reducers,
    initialState,
    middlewares
  )

  return store
}

export default configureStore
