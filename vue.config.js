let nodeEnv = 'dev';
module.exports = {
  devServer: {
    // 本地ip地址
    host: '0.0.0.0',
    port: 4000,
    /* 使用代理 */
    proxy: {
      '/my': {
        /* 目标代理服务器地址 */
        target: 'https://mytest.jingyungame.com',
        // target: 'https://mytest.jingyungame.com',
        /* 允许跨域 */
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/my': ''
        }
      },
      '/rt': {
        // target: 'https://rt.jingyungame.com',
        target: 'https://rttest.jingyungame.com',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/rt': ''
        }
      }
    }
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = '鲸云游戏';
      return args;
    })
  },
  productionSourceMap: false,
  lintOnSave: false,
  publicPath: nodeEnv == 'master' ? 'https://pg.jingyungame.com/cloud/' : ''
}
