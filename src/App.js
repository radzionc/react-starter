import React from 'react'
import { Provider } from 'react-redux'

import store from './store'

export default () => (
  <Provider store={store}>
    <div style={{ width: '100%', textAlign: 'center' }}>
      <h1>Hello from App</h1>
    </div>
  </Provider>
)
