import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'  //eslint-disable-line
import App from './views/App.jsx'     //eslint-disable-line
import {
  BrowserRouter as Router
} from 'react-router-dom'
import { Provider } from 'mobx-react'
import AppState from './store/app-state'

const initialState = window.__INITIAL__STATE__ || {} //eslint-disable-line

const root = document.getElementById('root')
const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider appState={new AppState(initialState.appState)}>
        <Router><Component /></Router>
      </Provider>
    </AppContainer>, root)
}
render(App)

if (module.hot) {
  module.hot.accept('./App.jsx', () => {
        const NextApp = require('./views/App.jsx').default  //eslint-disable-line
    render(NextApp)
  })
}
