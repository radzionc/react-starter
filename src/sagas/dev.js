import { put } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import { changeTheme } from '../actions/theme'
import { PATH } from '../constants/routing'

export function* runCommand({ payload }) {
  if (payload === 'auth') {
    yield put(changeTheme('dark'))
    yield put(push(PATH.AUTH))
  }
}
