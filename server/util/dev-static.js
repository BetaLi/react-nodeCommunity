const axios = require('axios')
const path = require('path')
const MemoryFs = require('memory-fs')
const proxy = require('http-proxy-middleware')
const webpack = require('webpack')
const serverConfig = require('../../build/webpack.config.server')
const serverRender = require('./server-render')


const getTemplate = () => {
  return new Promise((resolve, reject) => {
    axios('http://localhost:8888/public/server.ejs').then(res => {
      resolve(res.data)
    }).catch(reject)
  })
}

const NativeModule = require('module')
const vm = require('vm')

const getModuleFromString = (bundle, filename) => {
  const m = {exports: {}}
  const wrapper = NativeModule.wrap(bundle)
  const script = new vm.Script(wrapper, {
    filename: filename,
    displayErrors: true
  })
  const result = script.runInThisContext()
  result.call(m.exports, m.exports, require, m)
  return m
}

const mfs = new MemoryFs()
const serverCompiler = webpack(serverConfig)
serverCompiler.outputFileSystem = mfs
let serverBundle

serverCompiler.watch({}, (err, state) => {
  if (err) throw err
  state = state.toJson()
  state.errors.forEach(error => console.log(error))
  state.warnings.forEach(warn => console.log(warn))

  const bundlePath = path.join(
    serverConfig.output.path,
    serverConfig.output.filename
  )
  console.log(bundlePath)
  const bundle = mfs.readFileSync(bundlePath, 'utf-8')
  const m = getModuleFromString(bundle, 'server-entry.js')
  serverBundle = m.exports
})

module.exports = function (app) {
  app.use('/public', proxy({
    target: 'http://localhost:8888'
  }))
  app.get('*', (req, res, next) => {
    if (!serverBundle) {
      res.send('waiting for serverBundle, refresh later.')
    }
    getTemplate().then(template => {
      return serverRender(serverBundle, template, req, res)
    }).catch(next)
  })
}
