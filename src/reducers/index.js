import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import history from '../history'

import previousRouter from './previous-router'
import generic from './generic'
import theme from './theme'

const getNewReducer = () =>
  combineReducers({
    router: connectRouter(history),
    ...Object.entries({
      previousRouter,
      generic,
      theme
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
  return reducer(state, action)
}
