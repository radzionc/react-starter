import React from 'react'
import { Provider } from 'react-redux'

import Layout from './components/layout'
import store from './store'

export default () => (
  <Provider store={store}>
    <Layout />
  </Provider>
)
