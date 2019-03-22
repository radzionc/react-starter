import React from 'react'
import { Route, Switch } from 'react-router'

import { PATH } from './constants/routing'
import Auth from './components/auth'
import Main from './components/main'

export default () => (
  <Switch>
    <Route exact path={PATH.AUTH} component={Auth} />
    <Route exact path={PATH.MAIN} component={Main} />
    <Route component={Main} />
  </Switch>
)
