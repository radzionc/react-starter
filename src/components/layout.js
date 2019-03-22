import React from 'react'
import { ConnectedRouter } from 'connected-react-router'

import history from '../history'
import Router from '../router'

class Layout extends React.Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <Router />
      </ConnectedRouter>
    )
  }
}

export default Layout
