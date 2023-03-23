import client from 'webpack-theme-color-replacer/client'
import forElementUI from 'webpack-theme-color-replacer/forElementUI'
import themeUtil from 'webpack-theme-color-replacer/themeUtil'
const appConfig = require('./config.js')
 console.log(forElementUI);
export let curColor = appConfig.themeColor
// 动态切换主题色
export function changeThemeColor(newColor) {
    var customB = parseInt(Math.random() * 256).toString(16); // 按你需要生成颜色
    if (customB.length == 1) customB = '0' + customB
    console.log(customB);
    const options = {
        newColors: themeUtil.getMyColors(newColor, ['#88' + customB + customB, '#' + customB + '88' + customB]),
    }
    console.log(options);
    return client.changer.changeColor(options, Promise).then(() => {
        curColor = newColor
        localStorage.setItem('theme_color', curColor)
    });
}
 
export function initThemeColor() {
    const savedColor = localStorage.getItem('theme_color')
    if (savedColor) {
        curColor = savedColor
        changeThemeColor(savedColor)
    }
}