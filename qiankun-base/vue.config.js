const ThemeColorReplacer = require('webpack-theme-color-replacer')
const forElementUI = require('webpack-theme-color-replacer/forElementUI')
const themeUtil = require('webpack-theme-color-replacer/themeUtil')
const configColor = require('./src/utils/config')
module.exports = {
    chainWebpack: config => {
        // 自定义换肤
        config.plugin('webpack-theme-color-replacer')
          .use(ThemeColorReplacer)
          .tap(options => {
            options[0] = {
              fileName: 'css/theme-colors-[contenthash:8].css',
              // matchColors: [...forElementUI.getElementUISeries(configColor.themeColor, ['#0cdd3a'])],
              // changeSelector: forElementUI.changeSelector,
              //以下配置可以修改自定义颜色 的样式
              matchColors: themeUtil.getMyColors(configColor.themeColor, ['#0cdd3a', '#c655dd']),
              changeSelector: themeUtil.changeSelector,
              isJsUgly: process.env.NODE_ENV !== 'development'
            }
            return options
          })
      }
}