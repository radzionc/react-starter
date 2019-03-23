import { put, select } from 'redux-saga/effects'

import { saveLocation } from '../actions/previous-router'

export function* locationChange({ payload }) {
  const { location, isFirstRendering, action } = payload
  const state = yield select()
  const previousPathname = state.previousRouter.location.pathname
  console.info(
    `Action: ${action}, first rendering: ${isFirstRendering}. Location before: ${previousPathname}, after: ${
      location.pathname
    }`
  )

  yield put(saveLocation(location))
}
