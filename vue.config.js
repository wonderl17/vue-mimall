module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: {
            '/common': {
                target: 'https://www.imooc.com',
                changeOrign0: false
            }
        }
    }
}