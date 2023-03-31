const { defineConfig } = require('@vue/cli-service')

//const name = defaultSettings.title || '极客加' // 标题

const port = process.env.port || process.env.npm_config_port || 8788 // 端口
module.exports = defineConfig({
    publicPath: process.env.NODE_ENV==='production'?'./':'./',
    transpileDependencies: true,
    devServer: {
        host: '0.0.0.0',
        //host: 'localhost',
        port: port,
        open: true,
        //https: false,
        //hot: true,
        proxy: {
            // detail: https://cli.vuejs.org/config/#devserver-proxy
            [process.env.VUE_APP_BASE_API]: {
                //target: `http://localhost:8096/`,
                changeOrigin: true,
                //secure: true,
                pathRewrite: {
                    ['^' + process.env.VUE_APP_BASE_API]: ''
                }
            },
            "/163coviddata": {
                target: "https://c.m.163.com/ug/api/wuhan/app/data/list-total",
                changeOrigin: true,
                pathRewrite: {
                  "^/163coviddata": ''
                }
            }
        },
        allowedHosts: "all",
        // client: {
        //     webSocketURL: 'ws://0.0.0.0:8898/ws'
        // }
    }
})
