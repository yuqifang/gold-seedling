export default {
    namespaced: true, // vuex中store分模块管理，为了解决不同模块命名冲突的问题
    state: {
      menuData: [
        {key: 'index', value: '首页', path: ''},
        {key: 'selfChoice', value: '自选', path: ''},
        {key: 'firstNew', value: '头条', path: ''},
        {key: 'fastNew', value: '快讯', path: ''},
        {key: 'scienceBoard', value: '科创板', path: ''},
        {key: 'macroscopic', value: '宏观', path: ''},
        {key: 'foundation', value: '基金', path: ''},
        {key: 'roundTheWorld', value: '环球', path: ''},
        {key: 'xcExclusive', value: '湘财独家', path: ''}
      ],
        // permissionList: null, // 所有路由
        // leftMenuItem: {}, //  左侧导航菜单
        // currentMenu: '' // 当前active导航菜单
    },
    getters: {},
    mutations: {
        // SET_PERMISSION(state, routes) {
        //   state.permissionList = routes
        // },
        // CLEAR_PERMISSION(state) {
        //     state.permissionList = null
        // },
        // SET_MENU(state, menu) {
        //   state.leftMenuItem = menu
        // },
        // CLEAR_MENU(state) {
        //     state.sidebarMenu = []
        // },
        // SET_CURRENT_MENU(state, currentMenu) {
        //   state.currentMenu = currentMenu
        // }
    },
    actions: {
      // navClickAction ({ commit, state }, payload) {
      //   commit('SET_MENU', payload)
      // },
      // defaultShowOne ({ commit, state }, payload) {
      //   commit('SET_CURRENT_MENU', payload)
      // }
    }
}