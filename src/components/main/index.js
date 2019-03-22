import React from 'react'
import { push } from 'connected-react-router'

import { changeTheme } from '../../actions/theme'
import { connectTo } from '../../utils/generic'
import { PATH } from '../../constants/routing'

export default connectTo(
  state => ({
    themeName: state.theme.name
  }),
  { push, changeTheme },
  ({ push, themeName, changeTheme }) => (
    <div>
      <h1>Main</h1>
      <button
        onClick={() => changeTheme(themeName === 'light' ? 'dark' : 'light')}
      >
        Change Theme
      </button>
      <button onClick={() => push(PATH.AUTH)}>To the Auth</button>
    </div>
  )
)
