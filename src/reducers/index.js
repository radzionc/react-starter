import { combineReducers, createStore } from 'redux'
import { connectRouter } from 'connected-react-router'

import history from '../history'

import previousRouter from './previous-router'
import generic from './generic'
import theme from './theme'
import auth from './auth'
import { unauthorize } from '../actions/auth'

const getNewReducer = () =>
  combineReducers({
    router: connectRouter(history),
    ...Object.entries({
      previousRouter,
      generic,
      theme,
      auth
    }).reduce(
      (acc, [key, createReducer]) => ({
        ...acc,
        [key]: createReducer()
      }),
      {}
    )
  })

const reducer = getNewReducer()

export default (state, action) => {
  if (action.type === unauthorize.getType()) {
    return reducer(createStore(getNewReducer()).getState())
  }

  return reducer(state, action)
}
