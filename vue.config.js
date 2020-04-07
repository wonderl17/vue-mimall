module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: {
            '/api': {
                target: 'http://mall-pre.springboot.cn',
                changeOrigin: true,
                pathRewrite: {
                    '^/api':'/'
                }
            }
        }
      
    },
    publicPath: './',
    // outputDir: 'dest',
    // indexPath:'index2.html',
    // lintOnSave: false,
    productionSourceMap: false,
    chainWebpack: (config) => {
        config.plugins.delete('prefetch')
    }
}

//路由按需加载   router.js   component: ()=>import('')
//                                    resolve=>require([''],resolve)

//清楚预加载 chainWebpack: (config) => {
//     config.plugins.delete('prefetch')
// }