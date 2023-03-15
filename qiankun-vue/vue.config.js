/*
 * @Author: 裴子璇
 * @Date: 2022-08-22 17:17:01
 * @LastEditTime: 2022-08-22 18:51:17
 * @Description:
 */
const { name } = require("./package");
module.exports = {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    port: 8081
  },
  configureWebpack: {
    output: {
      library: `vueApp-[${name}]`,
      libraryTarget: "umd", // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_vueApp`,
      // chunkLoadingGlobal: `webpackJsonp_${name}`,
    },
  },
};
