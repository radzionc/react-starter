import React from 'react'
import { push } from 'connected-react-router'

import { connectTo } from '../../utils/generic'
import { PATH } from '../../constants/routing'

export default connectTo(() => ({}), { push }, ({ push }) => (
  <div>
    <h1>Main</h1>
    <button onClick={() => push(PATH.AUTH)}>To the Auth</button>
  </div>
))
