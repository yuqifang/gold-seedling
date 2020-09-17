import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'


Vue.use(Vuex)
const state = {
  // 配置说明
  // 1. name为必配字段且要与路由里面的name相同
  // 2. type配置为'link'时，path为必配字段，且path为路由的路径，配置为'module'时，path为非必配字段
  // 3. permission为菜单权限字段，true为有权限，false为无权限，大家都能看的菜单，前端默认配置为true，需要有权限才能看见的菜单前端默认配置为false，然后根据后端返回的权限，动态修改前端配置的权限字段permission
  // 4. 这里的数据最好是全部通过可视配置页面或者数据库配置得到
  // allTree: [], // 所有的DOM节点
  // pageRemark:localStorage.getItem('remarkName')? JSON.parse(localStorage.getItem('remarkName')):[],
}
const getters = {

}
const mutations = {
  // setPageRemarks(state,res){
  //     state.pageRemark=res
  // },
  // setTreeList(state, data) {
  //   state.allTree = data;
  // }
}
const store = new Vuex.Store({
  modules,
  state,
  getters,
  mutations
})
export default store
