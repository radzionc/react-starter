import { combineReducers } from 'redux'

import generic from './generic'

const getNewReducer = () =>
  combineReducers(
    Object.entries({
      generic
    }).reduce(
      (acc, [key, createReducer]) => ({
        ...acc,
        [key]: createReducer()
      }),
      {}
    )
  )

const reducer = getNewReducer()

export default (state, action) => {
  return reducer(state, action)
}
