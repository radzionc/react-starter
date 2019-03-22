import { createReducer } from 'redux-act'

import * as a from '../actions/theme'
import { THEMES, LIGHT_THEME } from '../constants/theme'

const getDefaultState = () => LIGHT_THEME

export default () =>
  createReducer(
    {
      [a.changeTheme]: (state, name) =>
        THEMES.find(theme => theme.name === name)
    },
    getDefaultState()
  )
