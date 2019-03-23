import React from 'react'

import * as actions from '../../actions/auth'
import { connectTo } from '../../utils/generic'
import Button from '../button'

export default connectTo(
  state => state.auth,
  actions,
  ({ token, authorize, unauthorize }) => (
    <div>
      <h1>Auth</h1>
      <Button
        text={token ? 'Sign Out' : 'Sign In'}
        onClick={token ? unauthorize : authorize}
      />
    </div>
  )
)
