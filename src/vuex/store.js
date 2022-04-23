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
  jia(context, value) {
    context.commit('JIA', value) //cnotext是一个mini版的￥store, 我要用context.commit()去通知mutations加工状态
  }
}

// 创建一个mutations，值为一个对象，包含多个真正用于加工状态的函数
const mutations = {
  JIA(state, value) {
    state.sum += value
  }
}

// getters中配置的是state中的数据经过加工后的值 ——类似于vue中的computed
const getters = {
  bigSum(state) {
    return state.sum * 100
  }
}


// 创建store.用于管理：state对象、actions对象、mutation对象
const store = new Vuex.Store({
  state,
  actions
})

export default store