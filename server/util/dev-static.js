const axios = require('axios')
const path = require('path')
const MemoryFs = require('memory-fs')
const proxy = require('http-proxy-middleware')
const ReactDomServer = require('react-dom/server')


const webpack = require('webpack')
const serverConfig = require('../../build/webpack.config.server')

const getTemplate = ()=>{
    return new Promise((resolve,reject)=>{
        axios('http://localhost:8888/public/index.html').then(res=>{
            resolve(res.data)
        }).catch(reject)
    })
}
const mfs = new MemoryFs()
const serverCompiler = webpack(serverConfig)
serverCompiler.outputFileSystem = mfs
const Module = module.constructor
let serverBundle

serverCompiler.watch({},(err,state)=>{
    if(err) throw err
    state = state.toJson()
    state.errors.forEach(error=>console.log(error))
    state.warnings.forEach(warn=>console.log(warn))

    const bundlePath = path.join(
        serverConfig.output.path,
        serverConfig.output.filename
    )
    console.log(bundlePath)
    const bundle = mfs.readFileSync(bundlePath,'utf-8')
    const m = new Module()
    m._compile(bundle,"server-entry.js")
    serverBundle = m.exports.default
})

module.exports = function (app) {
    app.use('/public',proxy({
        target:'http://localhost:8888'
    }))
    app.get('*',(req,res)=>{
        getTemplate().then(template=>{
            const content = ReactDomServer.renderToString(serverBundle)
            template.replace("<app></app>",content)
            res.send(template)
        })
    })
}
