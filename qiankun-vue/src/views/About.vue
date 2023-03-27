<template>
  <div id="app">
    <h1>vue-micro-About</h1>
    <el-color-picker v-model="mainColor" size="small" @change="changeColor"></el-color-picker>
    <router-link to="/" class="el-link el-link--primary">Home</router-link> |
    <router-link to="/about" class="el-link el-link--primary">About</router-link>
  </div>
</template>

<script>
import { changeThemeColor, curColor } from '../utils/themColorClient'
export default {
  data() {
    return {
      mainColor:curColor
    };
  },
  methods: {
    changeColor(newColor) {
      changeThemeColor(newColor)
      // .then((t) => {
      //   console.log('123465')
      //   console.log(t);
      // })
    }
  },
};
</script>

<style lang="scss" scoped></style>
