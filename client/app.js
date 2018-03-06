import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'  //eslint-disable-line
import App from './views/App.jsx'     //eslint-disable-line
import {
    BrowserRouter as Router
} from 'react-router-dom'

const root = document.getElementById('root');
const render = (Component) => {
  ReactDOM.render(
      <AppContainer>
         <Router><Component /></Router>
      </AppContainer>, root)
}
render(App);

if (module.hot) {
    module.hot.accept('./App.jsx', () => {
        const NextApp = require('./views/App.jsx').default  //eslint-disable-line
        render(NextApp)
    })
}
