import React from 'react'
import App from './views/App.jsx'
import { StaticRouter } from 'react-router-dom'
import { Provider, useStaticRendering } from 'mobx-react'
import { createStoreMap } from './store/store';

// 让mobx在服务端渲染的时候不会重复的数据使用
useStaticRendering(true)

export default (stores, routerContext, url) => (
      <Provider {...stores}>
        <StaticRouter context={routerContext} location={url}>
          <App/>
        </StaticRouter>
      </Provider>
)

export { createStoreMap }
