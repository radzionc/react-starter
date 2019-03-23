import { select, put } from 'redux-saga/effects'

import { setUserForReporting } from '../utils/generic'
import { unauthorize } from '../actions/auth'

export function* startApp() {
  const state = yield select()
  if (state.auth.token) {
    if (state.auth.tokenExpirationTime < Date.now()) {
      yield put(unauthorize())
    } else {
      setUserForReporting(state.user.id)
    }
  }
}
