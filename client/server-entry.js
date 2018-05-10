import React from 'react'
import App from './views/App.jsx'
import { StaticRouter } from 'react-router-dom'
import { Provider, useStaticRendering } from 'mobx-react'
import { createStoreMap } from './store/store';

import JssProvider from 'react-jss/lib/JssProvider'
import { MuiThemeProvider } from 'material-ui/styles'

// 让mobx在服务端渲染的时候不会重复的数据使用
useStaticRendering(true)

export default (stores, routerContext, sheetRegistry, generateClassName, theme, url) => (
      <Provider {...stores}>
        <StaticRouter context={routerContext} location={url}>
          <JssProvider registry={sheetRegistry} generateClassName={generateClassName}>
            <MuiThemeProvider theme={theme}>
              <App/>
            </MuiThemeProvider>
          </JssProvider>
        </StaticRouter>
      </Provider>
)

export { createStoreMap }
