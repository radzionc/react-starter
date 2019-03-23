import { put } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import { receiveAuthData } from '../actions/auth'
import { PATH } from '../constants/routing'

export function* authorize() {
  // mock: start
  const authData = {
    token: 'mock token',
    tokenExpirationTime: Date.now() + 30 * 24 * 60 * 60 * 1000
  }
  // mock: end

  yield put(receiveAuthData(authData))
  yield put(push(PATH.MAIN))
}
