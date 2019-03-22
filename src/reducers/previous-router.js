import { createReducer } from 'redux-act'

import * as a from '../actions/previous-router'

const getDefaultState = () => ({
  location: {
    pathname: undefined
  }
})

export default () =>
  createReducer(
    {
      [a.saveLocation]: (state, location) => ({
        ...state,
        location
      })
    },
    getDefaultState()
  )
