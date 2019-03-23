import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'

import history from './history'
import { unauthorize } from './actions/auth'

export const sagaMiddleware = createSagaMiddleware()

const localStorageMiddleware = store => next => action => {
  if (action.type === unauthorize.getType()) {
    localStorage.clear()
  }

  const prevState = store.getState()
  const result = next(action)
  const nextState = store.getState()

  if (prevState.auth.token !== nextState.auth.token && nextState.auth.token) {
    localStorage.setItem('token', nextState.auth.token)
    localStorage.setItem(
      'tokenExpirationTime',
      nextState.auth.tokenExpirationTime
    )
  }

  return result
}

export default [
  routerMiddleware(history),
  sagaMiddleware,
  localStorageMiddleware
]
