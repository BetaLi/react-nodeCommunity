import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'  //eslint-disable-line
import App from './views/App.jsx'     //eslint-disable-line
import {
  BrowserRouter as Router
} from 'react-router-dom'
import { Provider } from 'mobx-react'
import AppState from './store/app-state'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { colors } from 'material-ui/colors'

const initialState = window.__INITIAL__STATE__ || {} //eslint-disable-line

const theme = createMuiTheme({
  palette: {
    primary: colors.lightBlue,
    accent: colors.red,
    type: 'light'
  }
})

const createApp = (TheApp) => {
  class Main extends React.Component {
    // Remove the server-side injected CSS.
    componentDidMount () {
      const jssStyles = document.getElementById('jss-server-side');
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }

    render () {
      return <TheApp />
    }
  }
  return Main
}

const root = document.getElementById('root')
const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider appState={new AppState(initialState.appState)}>
        <MuiThemeProvider them={theme}>
          <Router><Component /></Router>
        </MuiThemeProvider>
      </Provider>
    </AppContainer>, root)
}
render(createApp(App))

if (module.hot) {
  module.hot.accept('./App.jsx', () => {
        const NextApp = require('./views/App.jsx').default  //eslint-disable-line
    render(createApp(NextApp))
  })
}
