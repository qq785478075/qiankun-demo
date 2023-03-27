import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import routes from "./router";
import "./public-path";
// import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {initThemeColor } from './utils/themColorClient.js'
Vue.use(ElementUI)
Vue.config.productionTip = false;
let router = null;
let instance = null;
function render(props = {}) {
  // console.log(arguments);
  const { container } = props;
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ?  '/app-vue/' : '/',
    mode: "history",
    routes,
  });

  instance = new Vue({
    router,
    // store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector("#app") : "#app");
  initThemeColor()
}
// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}
export async function mount(props) {
  console.log("[vue] props from main framework", props);
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
  router = null;
}
