<template>
  <el-container>
    <el-header class="header">
      <el-color-picker v-model="mainColor" size="small" @change="changeColor"></el-color-picker>
    </el-header>
    <el-container class="container">
      <el-aside class="aside" width="auto">
        <!-- <router-link to="/app-vue">vue</router-link> |
      <router-link to="/app-react">react</router-link> -->
        <el-menu
          default-active=""
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
        >
          <el-menu-item index="/">
            <template slot="title">
              <el-link type="primary" :underline="false" to="/">
                <i class="el-icon-s-order"></i>
                主页
              </el-link>
            </template>
          </el-menu-item>
          <el-menu-item index="/app-vue">
            <template slot="title">
              <router-link to="/app-vue">
                <i class="el-icon-s-order"></i>
                测试1
              </router-link>
            </template>
          </el-menu-item>
          <el-menu-item index="/app-vue/about">
            <template slot="title">
              <router-link to="/app-vue/about">
                <i class="el-icon-s-order"></i>
                测试2 - About
              </router-link>
            </template>
          </el-menu-item>
          <el-menu-item index="/app-react">
            <router-link to="/app-react" slot="title">
              <i class="el-icon-s-platform"></i>
              测试3
            </router-link>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="main">
        <router-view />
        <div id="container"></div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import { changeThemeColor, curColor } from './utils/themColorClient'
export default {
  data() {
    return {
      isCollapse: false,
      mainColor:curColor
    };
  },
  methods:{
    changeColor(newColor) {
      changeThemeColor(newColor)
      // .then((t) => {
      //   console.log('123465')
      //   console.log(t);
      // })
    }
  }
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
  border: 0;
}
.header {
  box-shadow: 0px 0px 3px 0px #ccc;
}
.container {
  min-height: calc(100vh - 60px);
}
.aside {
  box-shadow: 0px 1px 3px 0px #ccc;
}
</style>
