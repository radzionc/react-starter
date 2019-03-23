import * as Sentry from '@sentry/browser'
import ReactGA from 'react-ga'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { SENTRY_ENABLED, GA_ENABLED } from '../constants/generic'

export const connectTo = (mapStateToProps, actions, Component) => {
  const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component)
}

export const reportError = (message, info) => {
  if (SENTRY_ENABLED) {
    if (info) {
      Sentry.withScope(scope => {
        Object.keys(info).forEach(key => {
          scope.setExtra(key, info[key])
        })
      })
    }
    Sentry.captureException(message)
  } else {
    console.error(message, info)
  }
}

export const setUserForReporting = id => {
  if (SENTRY_ENABLED) {
    Sentry.configureScope(scope => scope.setUser({ id }))
  }
  if (GA_ENABLED) {
    ReactGA.set({ userId: id })
  }
}
