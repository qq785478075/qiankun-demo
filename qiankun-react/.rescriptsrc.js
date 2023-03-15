/*
 * @Author: 裴子璇
 * @Date: 2022-08-23 10:41:26
 * @LastEditTime: 2022-08-23 11:19:42
 * @Description:  
 */
const { name } = require('./package');

module.exports = {
  webpack: (config) => {
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = 'umd';
    config.output.chunkLoadingGlobal = `webpackJsonp_${name}`;
    config.output.globalObject = 'window';

    return config;
  },

  devServer: (_) => {
    const config = _;

    config.headers = {
      'Access-Control-Allow-Origin': '*',
    };
    config.historyApiFallback = true;
    config.hot = false;
    // config.watchContentBase = false;
    // config.watchContentBase = false;
    config.liveReload = false;

    return config;
  },
};