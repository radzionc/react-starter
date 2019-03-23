import React from 'react'
import { Provider } from 'react-redux'

import Layout from './components/layout'
import store from './store'
import saga from './sagas'
import { sagaMiddleware } from './middleware'

export default () => (
  <Provider store={store}>
    <Layout />
  </Provider>
)

sagaMiddleware.run(saga)
