import React from 'react'
import styled from 'styled-components'
import { configure, addDecorator } from '@storybook/react'
import { withThemesProvider } from 'storybook-addon-styled-component-theme'
import { withKnobs } from '@storybook/addon-knobs/react'
import { withInfo } from '@storybook/addon-info'

import { THEMES } from '../src/constants/theme'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${p => p.theme.color.pageBackground};
`

const req = require.context('../stories', true, /.stories.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}
addDecorator(story => <Container>{story()}</Container>)
addDecorator(withInfo)
addDecorator(withThemesProvider(THEMES))
addDecorator(withKnobs)
configure(loadStories, module)
