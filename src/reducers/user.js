import { createReducer } from 'redux-act'

import * as a from '../actions/user'
import { takeIfExists } from '../utils/local-storage'

const getDefaultState = () => ({
  id: takeIfExists('id')
})

export default () =>
  createReducer(
    {
      [a.receiveUserData]: (state, { id }) => ({
        ...state,
        id
      })
    },
    getDefaultState()
  )
