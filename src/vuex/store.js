import Vue from 'vue'
import Vuex from 'vuex'

// 应用插件
Vue.use(Vuex)

// 初始化总状态,要写成一个对象,包含多个key-value, 用于管理多个组件的状态
const state = {
  sum: 99
}

// 创建一个actions，值为一个对象，包含多个响应组件“动作”的函数
const actions = {
  jia(a,b) {
    console.log(a, b);
  }
}

// 创建store.用于管理：state对象、actions对象、mutation对象
const store = new Vuex.Store({
  state,
  actions
})

export default store