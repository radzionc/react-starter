import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import history from '../history'
import Router from '../router'
import { connectTo } from '../utils/generic'
import { runCommand } from '../actions/dev'

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    height: 100%;
    background-color: ${p => p.theme.color.pageBackground};
  }

  * {
    margin: 0;
    outline: none;
    box-sizing: border-box;
    font-family: sans-serif;
    color: ${p => p.theme.color.mainText}
  }
`

class Layout extends React.Component {
  render() {
    const { theme } = this.props
    return (
      <ThemeProvider theme={theme}>
        <ConnectedRouter history={history}>
          <Router />
          <GlobalStyle />
        </ConnectedRouter>
      </ThemeProvider>
    )
  }

  componentDidMount() {
    window.runCommand = this.props.runCommand
  }
}

export default connectTo(
  state => ({
    theme: state.theme
  }),
  {
    runCommand
  },
  Layout
)
