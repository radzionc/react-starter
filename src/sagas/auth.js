import { put } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import { receiveAuthData } from '../actions/auth'
import { receiveUserData } from '../actions/user'
import { PATH } from '../constants/routing'

export function* authorize() {
  // mock: start
  const { token, tokenExpirationTime, id } = {
    token: 'mock token',
    tokenExpirationTime: Date.now() + 30 * 24 * 60 * 60 * 1000,
    id: 'mock id'
  }
  // mock: end

  yield put(receiveAuthData({ token, tokenExpirationTime }))
  yield put(receiveUserData({ id }))
  yield put(push(PATH.MAIN))
}
