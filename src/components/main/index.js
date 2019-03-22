import React from 'react'
import { push } from 'connected-react-router'

import Button from '../button'
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
      <Button
        onClick={() => changeTheme(themeName === 'light' ? 'dark' : 'light')}
        text={'Change Theme'}
      />
      <Button onClick={() => push(PATH.AUTH)} text={'To the Auth'} />
    </div>
  )
)
