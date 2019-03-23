import { takeLatest } from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'connected-react-router'

import * as routerSagas from './router'

import * as devActions from '../actions/dev'
import * as devSagas from './dev'

import * as authActions from '../actions/auth'
import * as authSagas from './auth'

import * as genericActions from '../actions/generic'
import * as genericSagas from './generic'

export default function* saga() {
  const relations = [
    [devActions, devSagas],
    [authActions, authSagas],
    [genericActions, genericSagas]
  ]

  for (const [actions, sagas] of relations) {
    for (const [actionName, action] of Object.entries(actions)) {
      const saga = sagas[actionName]
      if (saga) yield takeLatest(action.getType(), saga)
    }
  }

  yield takeLatest(LOCATION_CHANGE, routerSagas.locationChange)
}
