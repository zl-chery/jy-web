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
          target: 'https://my.jingyungame.com',
          // target: 'https://mytest.jingyungame.com',
          /* 允许跨域 */
          changeOrigin: true,
          ws: true,
          pathRewrite: {
              '^/my':''
          }
      },
      '/rt': {
          // target: 'https://rt.jingyungame.com',
          target: 'https://rttest.jingyungame.com',
          changeOrigin: true,
          ws: true,
          pathRewrite: {
              '^/rt':''
          }
      }
    }
  },
  chainWebpack: (config) => {
    config.plugin('html').tap(args => {
      args[0].title = '鲸云游戏';
      return args;
    });
  },
  productionSourceMap: false,
  lintOnSave: false,
  publicPath: nodeEnv == 'master' ? 'https://pg.jingyungame.com/cloud/' : '',
  // "plugins": {
  //   "postcss-import": {},
  //   "postcss-url": {},
  //   // to edit target browsers: use "browserslist" field in package.json
  //   "autoprefixer": {},
  //   "postcss-pxtorem": { // 此处为添加部分
  //     rootValue: 100, // 换算基数，默认100，把根标签的font-size规定为1rem为50px,在设计稿上量出多少px直接在代码中写多少px
  //     unitPrecision: 5,  //保留rem小数点多少位
  //     propList: ['*', '!border', '!font-size'], //  存储将被转换的属性列表，'!font-size' 即不对字体进行rem转换
  //     selectorBlackList: ['.radius'], // 要忽略并保留为px的选择器，例如fs-xl类名，里面有关px的样式将不被转换，支持正则写法。
  //     replace: true,
  //     mediaQuery: false,//（布尔值）媒体查询( @media screen 之类的)中不生效
  //     minPixelValue: 12,///设置要替换的最小像素值，px小于12的不会被转换
  //     //propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性
  //     propBlackList: ['font-size'], //黑名单
  //   }
  // }
}

