import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { registerMicroApps, start } from "qiankun";
Vue.config.productionTip = false;
Vue.use(ElementUI)
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
let arr = [
  {
    name: "vueApp",
    entry: "//localhost:8081",
    container: "#container",
    activeRule: "/app-vue",
  },
  {
    name: 'react-micro',
    entry: '//localhost:3000',// 默认会加载这个html 解析里面的js 动态的执行 （子应用必须支持跨域）fetch
    container: '#container',
    activeRule: '/app-react',
  }
]
registerMicroApps(arr);
start({
  prefetch: true, //是否开启预加载，默认为 true
  sandbox : { 
    strictStyleIsolation: false , 
    experimentalStyleIsolation: false 
  }//是否开启沙箱，默认为 true
});

