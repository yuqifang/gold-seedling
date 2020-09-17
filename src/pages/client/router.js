import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'login', component: r => { require(['../../components/Client'], r) }, meta: { title: 'client页面' }}
]

export default new VueRouter({
    routes: routes
})