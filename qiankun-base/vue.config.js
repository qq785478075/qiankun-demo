const ThemeColorReplacer = require('webpack-theme-color-replacer')
const forElementUI = require('webpack-theme-color-replacer/forElementUI')
const configColor = require('./src/utils/config')
module.exports = {
    chainWebpack: config => {
        // 自定义换肤
        config.plugin('webpack-theme-color-replacer')
          .use(ThemeColorReplacer)
          .tap(options => {
            options[0] = {
              fileName: 'css/theme-colors-[contenthash:8].css',
              matchColors: [...forElementUI.getElementUISeries(configColor.themeColor)],
              changeSelector: forElementUI.changeSelector,
              isJsUgly: process.env.NODE_ENV !== 'development'
            }
            return options
          })
      }
}