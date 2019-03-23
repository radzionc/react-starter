export const GA_KEY = process.env.REACT_APP_GA_KEY
export const SENTRY_KEY = process.env.REACT_APP_SENTRY_KEY

const IS_PRODUCTION = process.env.NODE_ENV === 'production'
export const GA_ENABLED = IS_PRODUCTION && GA_KEY
export const SENTRY_ENABLED = IS_PRODUCTION && SENTRY_KEY
