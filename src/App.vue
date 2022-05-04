<template>
  <div id="app">
    <h1>父组件</h1>
    <img alt="Vue logo" src="./assets/logo.png"/>
    <h1>现在的时间是：{{childTime}}</h1>
    <el-input v-model="input" placeholder="请输入" ref="keyword"></el-input>
    <HelloWorld msg="Welcome to Your Vue.js App" :lover="lover" @childTime="getTime"/>
    <com-footer ref="getFooter"></com-footer>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ComFooter from './components/ComFooter.vue'

export default {
  name: 'App',
  data() {
    return {
      lover: "蒙夏君",
      childTime: "",
      input: ""
    }
  },
  components: {
    HelloWorld,
    ComFooter
  },
  methods: {
    getTime(val) {
      this.childTime = val
    }
  },
  mounted() {
    console.log('this', this.$refs.keyword.value);
    console.log('Footer', this.$refs.getFooter.name);
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
