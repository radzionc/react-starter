import { createReducer } from 'redux-act'

import * as a from '../actions/auth'
import { takeIfExists } from '../utils/local-storage'

const getDefaultState = () => ({
  token: takeIfExists('token'),
  tokenExpirationTime: takeIfExists('tokenExpirationTime', Number)
})

export default () =>
  createReducer(
    {
      [a.receiveAuthData]: (state, { token, tokenExpirationTime }) => ({
        ...state,
        token,
        tokenExpirationTime
      })
    },
    getDefaultState()
  )
