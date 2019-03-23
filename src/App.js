import React from 'react'
import { Provider } from 'react-redux'
import * as Sentry from '@sentry/browser'
import ReactGA from 'react-ga'

import Layout from './components/layout'
import store from './store'
import saga from './sagas'
import { sagaMiddleware } from './middleware'

import {
  GA_ENABLED,
  GA_KEY,
  SENTRY_ENABLED,
  SENTRY_KEY
} from './constants/generic'

export default () => (
  <Provider store={store}>
    <Layout />
  </Provider>
)

sagaMiddleware.run(saga)

if (GA_ENABLED) {
  ReactGA.initialize(GA_KEY)
  ReactGA.pageview(window.location.pathname + window.location.search)
}
if (SENTRY_ENABLED) {
  Sentry.init({
    dsn: SENTRY_KEY
  })
}
