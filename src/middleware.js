import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'

import history from './history'
import { unauthorize } from './actions/auth'
import { setUserForReporting } from './utils/generic'

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
  if (prevState.user.id !== nextState.user.id) {
    if (nextState.user.id) {
      localStorage.setItem('id', nextState.user.id)
    }
    setUserForReporting(nextState.user.id)
  }
  return result
}

export default [
  routerMiddleware(history),
  sagaMiddleware,
  localStorageMiddleware
]
