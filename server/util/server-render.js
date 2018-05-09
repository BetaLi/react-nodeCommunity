const ReactDomServer = require('react-dom/server')
const ejs = require('ejs')
const bootstrap = require('react-async-bootstrapper')  // eslint-disable-line
const Helmet = require('react-helmet').default
const serializeJavascript =require('serialize-javascript')

const getStoreState = (stores) => {
  return Object.keys(stores).reduce((result, storeName) => {
    result[storeName] = stores[storeName].toJson()
    return result
  },{})
}

module.exports = function (bundle, template, req, res) {
  return new Promise ((resolve, reject) => {
    const createStoreMap = bundle.createStoreMap
    const createApp = bundle.default
    const routerContext = {}
    const stores = createStoreMap()
    const app = createApp(stores, routerContext, req.url)

    bootstrap(app).then(() => {
      if (routerContext.url) {
        res.status(302).setHeader('Location', routerContext.url)
        res.end()
        return
      }
      const helmet = Helmet.rewind()
      const state = getStoreState(stores)
      const content = ReactDomServer.renderToString(app)

      const html = ejs.render(template, {
        appString: content,
        initialState: serializeJavascript(state),
        title: helmet.title.toString(),
        link: helmet.link.toString(),
        meta: helmet.meta.toString(),
        style: helmet.style.toString()
      })
      res.send(html)
      resolve()
      // res.send(template.replace('<app></app>', content))
    }).catch(reject)
  })
}
