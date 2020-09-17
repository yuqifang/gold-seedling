import Vue from 'vue'
import NewsBoard from './NewsBoard.vue'
import router from './router'
import store from '../../store'

Vue.config.productionTip = false

Vue.use(require('vue-wechat-title'))

new Vue({
    router,
    store,
    render: h => h(NewsBoard)
}).$mount('#newsBoard')